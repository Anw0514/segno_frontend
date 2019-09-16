import React from 'react';
import '../App.css';
import FullCalendar from '@fullcalendar/react'
import DayGridPlugin from '@fullcalendar/daygrid'

function App() {
  return (
    <div className="App">
      <FullCalendar defaultView="dayGridMonth" plugins={[DayGridPlugin]} />
    </div>
  );
}

export default App;
