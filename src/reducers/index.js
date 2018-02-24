import { combineReducers } from 'redux';
import simpleCalcReducer from './simpleCalc.js';

const calcApp = combineReducers({
  simpleCalcReducer
})

export default calcApp;
