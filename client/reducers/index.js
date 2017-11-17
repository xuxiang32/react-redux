/**
 * Created by Jerry on 2017/2/9.
 */
import {combineReducers} from "redux";
import {routerReducer} from 'react-router-redux';

import test from './test'

const rootReducer = combineReducers({test,routing:routerReducer});
export default rootReducer;
