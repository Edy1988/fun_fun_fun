import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="Question">
          <Question />
      </div>
    );
  }
}

export default App;
