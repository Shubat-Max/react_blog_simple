import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Comment from '../Comment';
import UserForm from '../UserForm';
import Loader from '../Loader';
import Toggleable from '../../decorators/toggleOpen';
import { loadArticleComments } from '../../actions'
import PropTypes from "prop-types";



class CommentList extends Component {

    static propTypes = {
        // from component
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.array,
            loading: PropTypes.bool.isRequired,
            commentsLoading: PropTypes.bool.isRequired,
            commentsLoaded: PropTypes.bool.isRequired
        }).isRequired,

        // from connect
        loadArticleComments: PropTypes.func.isRequired,

        // from <Toggleable()>
        isOpen: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired
    };

    componentWillReceiveProps({ isOpen, article, loadArticleComments }){
        if( !this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded){
            loadArticleComments(article.id);
        }
    }

    render(){
        const { article, isOpen, toggle } = this.props;

        return (
            <Fragment>
                <button onClick = {toggle}>
                    { isOpen ? 'hide comments' : 'show comments' }
                </button>
                { this.getBody({article, isOpen}) }
            </Fragment>
        );
    }

    getBody = ({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) => {
        if ( !isOpen ) return null;
        if ( commentsLoading ) return <Loader/>;
        if ( !commentsLoaded ) return null;

        let commentsBlock = <p>No comments yet</p>;

        if( comments.length ){
            commentsBlock = comments.map(id =>
                    <Comment
                        id = { id }
                        key = { id }
                    />
            )
        }

        return (
            <div>
                { commentsBlock }
                <UserForm articleId = {this.props.article.id} />
            </div>
        )
    }
}



export default connect(null,
{
    loadArticleComments
})(Toggleable(CommentList));

