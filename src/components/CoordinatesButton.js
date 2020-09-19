import React from 'react';

class CoordinatesButton extends React.Component {
 
    handleClick = event =>{
        const mouseCoordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mouseCoordinates)
        debugger
    }
    //  create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.


    render(){
        console.log(this.props.onReceiveCoordinates)
        return (
        
            <button onClick={(event) => this.handleClick(event)}> Click Me</button>
        
            ) 
    }
}

export default CoordinatesButton


