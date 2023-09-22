import { createStore } from 'redux'

//store 
const store = createStore(reducer);

const history = []

// Reducer returns state
function reducer(state={amount: 1}, action) {
    if(action.type === 'increment') {
        return {amount: state.amount+1}; // not state.amount+1
    }
    return state;
}

// Global state
store.subscribe(() => {
    history.push(store.getState())
    console.log(history)
})

//Dispatch Event
setInterval(() => {
    store.dispatch({type: 'increment'})
},3000)
