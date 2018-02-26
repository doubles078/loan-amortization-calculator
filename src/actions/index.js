import * as actionType from './ActionType.js';

export const simpleCalculator = ({ principal, rate, term, monthlypayment }) => ({
  type: actionType.SIMPLE_SUBMIT,
  payload: {
    principal,
    rate,
    term,
    monthlypayment
  }
});
