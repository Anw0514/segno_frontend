import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../App.css';
import Schedule from '../calendars/schedule.js'
import Briefer from './briefer';
import { Responsive, Segment } from 'semantic-ui-react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedEvent: ""
    }
  }
  
  render() {
    return (
      <Segment.Group horizontal className="App">
        <Schedule />
        <Responsive minWidth={750}>
          <Briefer />
        </Responsive>
      </Segment.Group>
    )
  }
}

export default App;
