import React from 'react';

class DelayedButton extends React.Component {

    onDelayedClick = (e) =>{
        e.persist()
        console.log(this.props)
        setTimeout(() =>{
            this.props.delay
            this.props.onDelayedClick(e) //callback prop
        })
        // this.props.DelayedButton(timeOut)
    }

    render(){
        return(
            <button onClick={(e) => this.onDelayedClick(e)}>Delayed Click</button>
        )
    }
}

export default DelayedButton

// recap:
// this component needs a button that delays a set time
// we know that we have access to two props : onDelayedClick and delay
// we want to persist the event so that it does not refresh and console.log(null).
// a way we can delay time is by using setTimOut() setting both these props inside of it 
// see how to implement setTimeOut() in docs
