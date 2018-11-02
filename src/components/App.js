import React, { Component } from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import Articles from './routes/Articles';
import Counter from './Counter';
import ArticleFilter from './ArticleFilter';
// import UserForm from './UserForm';



export default class App extends Component {
    state = {
        selection: null
    };

    render(){
        return (
            <Provider store={store}>
                <Router>
                    <div>

                        <h2>
                            <span><NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink>   </span>
                            <span><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink>   </span>
                            <span><NavLink activeStyle={{color: 'red'}} to="/articles">Articles</NavLink></span>
                        </h2>

                        <Route path = "/counter" component={Counter}/>
                        <Route path = "/filters" component={ArticleFilter}/>
                        <Route path = "/articles" component={Articles}/>
                        {/*<Counter />*/}
                        {/*<UserForm />*/}
                        {/*<ArticleFilter />*/}
                        {/*<ArticleList />*/}
                    </div>
                </Router>
            </Provider>
        )
    }
}