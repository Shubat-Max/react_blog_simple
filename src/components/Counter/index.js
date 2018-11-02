import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { increment } from '../../actions'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    render(){
        return (
            <div>
                <h2>{ this.props.counter }</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }

    handleIncrement = () => {
        console.log('---', this.props.counter, 'to Increment');
        this.props.increment();
    }
}


export default connect(
    storage => ({
        counter: storage.count
    }),
    {
        increment
    }
)(Counter);



// function mapStateToProps(state) {
//     return {
//         counter: state.count
//     }
// }
//
// const mapToDispatch = {
//     increment
// };
//
// export default connect(mapStateToProps, mapToDispatch)(Counter);



// function mapStateToProps(state) {
//     return {
//         counter: state.count
//     }
// }
//
// const mapToDispatch = {
//     increment
// };
//
// const decorator = connect(mapStateToProps, mapToDispatch);
// export default decorator(Counter);