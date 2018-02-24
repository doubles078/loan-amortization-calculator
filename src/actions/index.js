import * as actionType from './ActionType.js';

export const simpleCalculator = ({ principal, rate, term, salary, expenses, plan }) => ({
  type: actionType.SIMPLE_SUBMIT,
  payload: {
    principal,
    rate,
    term,
    salary,
    expenses,
    plan
  }
});
