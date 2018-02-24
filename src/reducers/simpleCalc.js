import { SIMPLE_SUBMIT } from '../actions/ActionType.js';


const simpleCalcReducer = (state = {}, action) => {
  switch(action.type){
    case SIMPLE_SUBMIT:
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}

export default simpleCalcReducer;
