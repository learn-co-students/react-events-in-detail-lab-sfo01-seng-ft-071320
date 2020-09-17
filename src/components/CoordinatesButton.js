// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {


    onClick = (e) => {
        const mouseCoordinates = [e.clientX, e.clientY];
        //Pass this event data in as the argument for the onReceiveCoordinates prop
        this.props.onReceiveCoordinates(mouseCoordinates);
    }

    render() {
        return (
            <button onClick={(e) => this.onClick(e)}>Coordinates Button</button>
        )
    }
}


//Pass this event data in as the argument for the onReceiveCoordinates prop.

