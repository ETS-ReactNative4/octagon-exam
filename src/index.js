import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'



let predefineStateFromServer = {
    "questions": [
        {
            id: 2,
            "isAnswered": false,
            'picUrl': '/images/question-sample.png',
            'answer': 'A',
            'selectedOption': null
        },
        {
            id: 3,
            "isAnswered": false,
            'picUrl': '/images/question-sample-2.png',
            'answer': 'D',
            'selectedOption': null
        }
    ]

};
const store = createStore(reducer, predefineStateFromServer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/:index?" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
