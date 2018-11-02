import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import Article from '../Article';
import Loader from '../Loader';
// import Harmonica from '../../decorators/harmonica';
import { filterArticlesSelector } from "../../selectors";
// import { filterArticles } from "../../selectors";
import { loadAllArticles } from "../../actions";


class ArticleList extends Component {
    static propTypes = {

        // from connect
        articles: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        loaded: PropTypes.bool.isRequired,
        loadAllArticles: PropTypes.func.isRequired,

        // from <Harmonica()>
        openItemId: PropTypes.string,
        toggle: PropTypes.func
    };

    componentDidMount(){
        const {loaded, loading, loadAllArticles} = this.props;
        if( !loaded && !loading) loadAllArticles();
    }

    render(){
        const { articles, loading } = this.props;

        if( loading ) return <Loader/>;

        const articleElements = articles.map( article =>
            <div key = { article.id }>
                <NavLink to={`/articles/${article.id}`} activeStyle={{color:"pink"}}>
                    {article.title}
                </NavLink>
            </div>
        );

        return (
            <Fragment>
                { articleElements }
            </Fragment>
        );
    }
}

// Using "Reselector" package to filter articles
export default connect(storage => {
    return {
        articles: filterArticlesSelector(storage),
        loading: storage.articles.loading,
        loaded: storage.articles.loaded
    }
},{
    loadAllArticles
},null,{pure:false})(ArticleList);


// Using side function to filter articles
// export default connect( state => {
//         return {
//             articles: filterArticles(state)
//         };
//     }
// )(Harmonica(ArticleList));

// Filtering articles within connect (short and long versions)
// export default connect( storage => ({
//         articles: storage.articles.filter(article => {
//             return (!storage.filters.selected.length || storage.filters.selected.includes(article.id))
//         })
//     })
// )(Harmonica(ArticleList));

// export default connect( ({articles, filters}) => {
//         const { selected } = filters;
//
//         return {
//             articles: articles.filter(article => {
//                 return (!selected.length || selected.includes(article.id))
//             })
//         };
//     }
// )(Harmonica(ArticleList));