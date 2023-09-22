import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//Action name constant
const inc = "increment";
const dec = "decrement";
const incByAmt = "incrementByAmount"

//store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];


// Reducer returns state
function reducer(state = { amount: 1 }, action) {
  if (action.type === inc) {
    return { amount: state.amount + 1 }; // not state.amount+1
  }
  if (action.type === dec) {
    return { amount: state.amount - 1 }; // not state.amount+1
  }
  if (action.type === incByAmt) {
    return { amount: state.amount + action.payload }; // not state.amount+1
  }
  return state;
}

// Action Creators
function increment() {
    return {type: inc}
}
function decrement() {
    return {type: dec}
}
function incrementByAmount(value) {
    return {type: incByAmt, payload: value}
}
//Dispatch Event
setInterval(() => {
  store.dispatch(incrementByAmount(100));
}, 1000);
