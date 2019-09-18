import React from 'react';
import FullCalendar from '@fullcalendar/react'
import DayGridPlugin from '@fullcalendar/daygrid'
import EventDetails from '../cards/eventDetails';

class Schedule extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedEvent: ""
        }
    }

    render() {
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
                    },
                    {
                        title: 'Rehearsal',
                        start: '2019-09-13T10:30:00',
                        end: '2019-09-13T11:30:00',
                        extendedProps: {
                            department: 'Group 2'
                        },
                        description: 'Scenes 3 and 4'
                    }
                ]}
                eventClick={info => this.setState({selectedEvent: info.event.extendedProps})}
                />
        );
    }
}

export default Schedule;
