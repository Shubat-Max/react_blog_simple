import React, { Component } from 'react';
import ComboSelect from './ComboSelect';
import {connect} from "react-redux";
import {loadAllArticles} from "../../actions";
// import DateRange from './DateRange';

class ArticleFilter extends Component {

    componentDidMount(){
        const {loaded, loading, loadAllArticles} = this.props;
        if( !loaded && !loading) loadAllArticles();
    }

    render(){
        return(
            <div>
                <ComboSelect />
                {/*<DateRange />*/}
            </div>
        )
    }
}

export default connect(storage => {
    return {
        loading: storage.articles.loading,
        loaded: storage.articles.loaded
    }
},{
    loadAllArticles
},null,{pure:false})(ArticleFilter);