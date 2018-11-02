import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteArticle, loadArticle } from '../../actions';

import CommentList from '../CommentList';
import Loader from '../Loader';
import './article.css'



class Article extends Component {
    static propTypes = {
        // from component props
        isOpen: PropTypes.bool.isRequired,
        toggle: PropTypes.func,
        id: PropTypes.string.isRequired,

        //from connect
        deleteArticle: PropTypes.func.isRequired,
        loadArticle: PropTypes.func.isRequired,
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.array,
            loading: PropTypes.bool.isRequired,
            commentsLoading: PropTypes.bool.isRequired,
            commentsLoaded: PropTypes.bool.isRequired
        })
    };

    state = {
        updateIndex: 0
    };

    componentWillReceiveProps({isOpen, loadArticle, article}){
        if (article === undefined) return null;
        if (isOpen && !article.text && !article.loading) loadArticle(article.id);
    }

    render(){
        const { article } = this.props;

        if ( !article ) return null;

        return (
            <div>
                <h3>{ article.title }</h3>
                <button onClick={this.handleArticleDelete}>delete</button>
                <div>
                    { this.getBody() }
                </div>
            </div>
        );
    }

    handleArticleDelete = () => {
        const { article, deleteArticle } = this.props;
        deleteArticle(article.id);
    };

    getBody = () => {
        const { article, isOpen } = this.props;
        if(!isOpen) return null;
        if( article.loading ) return <Loader/>;
        return (
            <section>
                { article.text }
                { this.getCommentList() }
            </section>
        )
    };

    getCommentList = () => {
        const { article } = this.props;
        return (
            <CommentList
                article = { article }
                key = { this.state.updateIndex }
            />
        )
    };
}

export default connect((storage, ownProps) => {
    return {
        article: storage.articles.entities.get(ownProps.id)
    }
},{
    deleteArticle,
    loadArticle
})(Article);