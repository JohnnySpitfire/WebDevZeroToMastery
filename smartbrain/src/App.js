import React, { Component } from 'react';
// import logo from './logo.svg';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '043b9deded374d4fb62c3f773608d477'
 });

const particlesOptions = {
    particles: {
      number: {
        value:30,
        density: {
          enable: true,
          value_area: 1000,
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
      imgURL: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value }, () => {
    console.log('state input', this.state.input);
    });
  }

  onButtonSubmit = () => {
    this.setState({ imgURL: this.state.input }, () => {
      console.log('state imgurl', this.state.imgURL);
      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imgURL)
      .then(
  
      function(response) {
        console.log(response);
      },
      function(err){
        console.log(err);
      }
    );
  });
  setTimeout((console.log('submit finished')),100000);
}

  render() {  
    return (
    <div className="App">
      <Particles className='particles' params={particlesOptions}/>
      <Navigation/>
      <Logo />
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imgURL={this.state.imgURL}/>
    </div>
    );
  }
}

export default App;
