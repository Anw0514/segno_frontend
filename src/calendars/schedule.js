import React from 'react';
import FullCalendar from '@fullcalendar/react'
import DayGridPlugin from '@fullcalendar/daygrid'

function Schedule() {
    return (
        <FullCalendar defaultView="dayGridMonth" plugins={[DayGridPlugin]} />
    );
}

export default Schedule;
