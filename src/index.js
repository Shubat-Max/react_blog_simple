import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App/>, document.getElementById('root'));

// TODO: Webpack Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept('./components/App', () => {
//         const NextApp = require('./components/App').default;
//         ReactDOM.render(
//             <NextApp />,
//             document.getElementById('root')
//         )
//     })
// }

////// Component Initialization
//
// constructor(props)
//
// componentWillMount()
//
// render()
//
// componentDidMount()
//
////// Component Update
//
// componentWillReceiveProps(nextProps)
//
// shouldComponentUpdate(nextProps, nextState)
//
// componentWillUpdate(nextProps, nextState)
//
// render()
//
// componentDidUpdate(prevProps, prevState)
//
////// Component Destruction
//
// componentWillUnmount()
//