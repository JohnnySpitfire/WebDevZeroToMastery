import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <Particles className='particles' params={particlesOptions}/>
      <Navigation/>
      <Logo />
      <Rank/>
      <ImageLinkForm />
    </div>
  );
}

export default App;
