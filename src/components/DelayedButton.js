// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

    // onClick = (e) => {
    //     setTimeout((delay) => {
    //         this.props.delay
    //     })
    //     this.props.onDelayedClick(e)
    // }

    onDelayedClick = (e) => {
        e.persist();
        window.setTimeout(() => {
            this.props.delay
            this.props.onDelayedClick(e)
        })
    }

    render() {
        return (
            <button onClick={this.onDelayedClick}>Delayed Button</button>
        )
    }
}
