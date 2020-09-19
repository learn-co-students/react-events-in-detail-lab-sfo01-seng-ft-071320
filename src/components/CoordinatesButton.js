import React from 'react';

class CoordinatesButton extends React.Component {
 
    handleClick = event =>{
        const mouseCoordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mouseCoordinates)

    }
    //  create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.


    render(){
        console.log(this.props)
        console.log(this.props.onReceiveCoordinates)
        return (
        
            <button onClick={(event) => this.handleClick(event)}> Click Me</button>
        
            ) 
    }
}

export default CoordinatesButton

// recap: 
// how would you be able to find the x and y Coordinates for a button / mouse click
// you can pass in an event to our onClick and log them there.

// how would our parent component know the Coordinates?
// our parent component is passing to this child on onReceiveCoordinates with an argument of mouseCoordinates(which has nothing assigned to it)
// we must assign mouseCoordinates the array of our x & y coordinates and then pass that to our callback prop => this.props.onReceiveCoordinates

