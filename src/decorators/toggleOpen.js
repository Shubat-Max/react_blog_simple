import React, { Component } from 'react'

export default (OriginalComponent) => class toggleableComponent extends Component {
    state = {
        isOpen: false
    };

    render(){
        return <OriginalComponent
            { ...this.props }
            { ...this.state }
            toggle = {this.toggle}
        />
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}