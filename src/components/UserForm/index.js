import React, { Component } from 'react'
import { connect } from 'react-redux';

import "./userform.css"
import { addComment } from "../../actions";

class UserForm extends Component {
    state = {
        user: '',
        text: ''
    };

    render(){
        return (
            <div className="comment-from-wrap">
                <div className="comment-form">
                    <label className="comment-form-label">Name</label>
                    <input
                        className={ this.getClassNames('user') }
                        type="text"
                        value={ this.state.user }
                        onChange={ this.handleInputChange('user') }
                    />
                    <label className="comment-form-label">Text</label>
                    <textarea
                        className={ this.getClassNames('text') }
                        value={ this.state.text }
                        onChange={ this.handleInputChange('text') }
                    />
                    <div
                        className="comment-submit-button"
                        onClick={ this.handleSubmitOnClick }
                    >Submit</div>
                </div>
            </div>
        )
    }

    handleInputChange = type => ev => {
        this.setState({
            [type]: ev.target.value
        })
    };

    getClassNames = type => {
        const error = this.state[type].length && (!(this.state[type].length >= limits[type].min) || !(this.state[type].length <= limits[type].max)) ? 'comment-form-input__error' : '';
        return `${error} comment-form-input`;
    };

    handleSubmitOnClick = () => {
        if(this.state.user.length !== 0 && this.state.text.length !== 0){
            this.props.addComment(this.state);
            this.setState({
                user: '',
                text: ''
            });
        }
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
};

export default connect(
    null,
    (dispatch, ownProps) => ({
        addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
    })
)(UserForm);