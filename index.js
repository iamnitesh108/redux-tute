import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

// Reducer returns state
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    return { amount: state.amount + 1 }; // not state.amount+1
  }
  if (action.type === "decrement") {
    return { amount: state.amount - 1 }; // not state.amount+1
  }
  if (action.type === "incrementByAmount") {
    return { amount: state.amount + action.payload }; // not state.amount+1
  }
  return state;
}

// Action Creators
function increment() {
    return {type: 'increment'}
}
function decrement() {
    return {type: 'decrement'}
}
function incrementByAmount(value) {
    return {type: 'incrementByAmount', payload: value}
}
//Dispatch Event
setInterval(() => {
  store.dispatch(incrementByAmount(100));
}, 1000);
