import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../App.css';
import Schedule from '../calendars/schedule.js'
import Briefer from './briefer';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Schedule />
        <Briefer />
      </div>
    )
  }
}

export default App;
