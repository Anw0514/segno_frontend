import React from 'react';

class EventDetails extends React.Component {
    
    render() {

        const e = this.props.details ? this.props.details : {description : "none", department: "none"}

        return (
            < div className='dark'>
            Department: {e.department}
            Description: {e.description}
            </ div>
        );
    }
}

export default EventDetails;