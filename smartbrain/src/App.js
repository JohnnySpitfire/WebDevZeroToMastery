import React, { Component } from 'react';
// import logo from './logo.svg';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import SignIn from './components/signin/SignIn';
import Register from './components/register/Register';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '043b9deded374d4fb62c3f773608d477'
 });

const particlesOptions = {
    particles: {
      number: {
        value:5,
        density: {
          enable: true,
          value_area: 200,
        }
      },
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
      box: {},
      route: 'SignIn',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    console.log('load user');
    this.setState({user:{
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined 
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box:box})
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imgURL: this.state.input });
      console.log('state imgurl', this.state.imgURL);
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.imgURL)
      .then(response => {
        fetch('http://localhost:3000/image', {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
      .then(response => response.json())
      .then(count =>{
        this.setState(Object.assign(this.state.user, {entries: count}))
      })
      this.displayFaceBox(this.calculateFaceLocation(response))
      .catch(err => console.log(err))
    }); 
  }

  onRouteChange = (route) => {
    if(route === 'SignIn') {
      this.setState({isSignedIn: false});
    } else if (route === 'Home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render() {  
    console.log(this.state);
    return (
    <div className="App">
      <Particles className='particles' params={particlesOptions}/>
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
      {this.state.route === 'SignIn'
            ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/> 
            : this.state.route === 'Register'
            ? <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            : <React.Fragment>
                <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
                <FaceRecognition box={this.state.box} imgURL={this.state.imgURL}/>
                </React.Fragment>
         }
    </div>
    );
  }
}

export default App;
