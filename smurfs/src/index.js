import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { smurfReducer } from './reducers/smurfReducer';

const store = createStore(smurfReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
