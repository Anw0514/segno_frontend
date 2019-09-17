import React from 'react';
import { Responsive, Segment } from 'semantic-ui-react';

class Briefer extends React.Component {

    render() {
        return (
            <Responsive as={Segment} minWidth={750}>
                This is the briefer, yall
            </Responsive>
        );
    }
}

export default Briefer;