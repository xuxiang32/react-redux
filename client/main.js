/**
 * Created by Jerry on 2017/2/9.
 */
import React from "react"
import {render} from "react-dom"
import {Provider} from 'react-redux';
import App from "./components/App";
import store,{histroy} from "./store";
import {Router,Route,IndexRoute,browserHistory} from "react-router";

const router = (
    <Provider store={store}>
        <Router history={histroy}>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>
);

render(router,document.getElementById("root"));