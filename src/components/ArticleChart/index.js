import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ArticleChart extends Component {
    static propTypes = {

    };

    componentDidMount(){
        // d3 works with this.refs.container
    }

    componentWillReceiveProps(nextProps){
        // update chart according to new articles
    }

    render(){
        return <div ref = 'container' />
    }

    componentWillUnmount(){
        // do some cleanup
    }
}

export default ArticleChart;