import React, { Component } from 'react';
import './reset.css';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

class App extends Component {
  render() {
    return (
      <div className='body'>

        <TopicBrowser />
      </div>
    )
  }
}

export default App;