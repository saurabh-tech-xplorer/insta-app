import React from 'react';
import './App.css';
import json from './api/statusStories.json';
import StoriesSlider from './components/StoriesSlider/StoriesSlider';
import InstagramLogo from './components/InstagramLogo/InstagramLogo';

function App() {
  return (
    <div className="App">
        <InstagramLogo/>
        <StoriesSlider data={json}/>
    </div>
  );
}

export default App;
