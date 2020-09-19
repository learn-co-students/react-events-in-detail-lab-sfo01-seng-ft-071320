import React from 'react';

class DelayedButton extends React.Component {

    onDelayedClick = (e) =>{
        e.persist()
        console.log(this.props)
        setTimeout(() =>{
            this.props.delay
            this.props.onDelayedClick(e)
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

// Code DelayedButton Component Here
