import React, { Component } from 'react'

export default (OriginalComponent) => class harmonicaComponent extends Component {
    state = {
        openItemId: null
    };

    render(){
        return <OriginalComponent
            { ...this.props }
            { ...this.state }
            toggle = { this.handleToggle }
        />
    }

    handleToggle = (id) => {
        const {openItemId} = this.state;
        this.setState({
            openItemId: openItemId !== id ? id : null
        })
    }
}