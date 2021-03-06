/**
 * Created by Jerry on 2017/1/22.
 */
import {createStore ,compose} from "redux";
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory} from "react-router";

import rootReducer from "./reducers/index";



const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() :f => f
);

const store = createStore(rootReducer,enhancers);

export const history = syncHistoryWithStore(browserHistory,store);

if(module.hot){
    module.hot.accept('./reducers/',()=>{
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;

