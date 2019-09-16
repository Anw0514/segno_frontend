import React from 'react';
import FullCalendar from '@fullcalendar/react'
import DayGridPlugin from '@fullcalendar/daygrid'

function Schedule() {
    return (
        <FullCalendar 
            defaultView="dayGridMonth" 
            plugins={[DayGridPlugin]} 
            events={[
                {
                    title: 'Rehearsal',
                    start: '2019-09-12T10:30:00',
                    end: '2019-09-12T11:30:00',
                    extendedProps: {
                        department: 'Group 1'
                    },
                    description: 'Scenes 1 and 2'
                }
            ]}
            eventRender={info => console.log(info.event.extendedProps)}
        />
    );
}

export default Schedule;
