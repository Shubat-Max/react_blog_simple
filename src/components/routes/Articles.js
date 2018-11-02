import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ArticleList from '../ArticleList';
import Article from '../Article';
// import { v4 } from 'uuid';



class Articles extends Component {
    render(){
        return (
            <div>
                <ArticleList />
                <Route path="/articles/:id" render={this.getArticle} />
            </div>
        )
    }

    getArticle = ({ match }) => {
        const { id } = match.params;
        return <Article id={ id } isOpen key={ id }/>
        // return <h1>Article id: {id}</h1>
    }
}



export default Articles;