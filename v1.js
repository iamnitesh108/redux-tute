import { createStore } from 'redux'

//store 
const store = createStore(reducer);

const history = []
// Reducer returns state
function reducer(state={amount: 1}, action) {
    if(action.type === 'increment') {
        //  state.amount = state.amount+1 // it mutate, don't do it
        return {amount: state.amount+1}; // not state.amount+1
    }
    return state;
}

// Global state
// console.log(store.getState())

store.subscribe(() => {
    history.push(store.getState())
    console.log(history)
})

//Dispatch Event
setInterval(() => {
    store.dispatch({type: 'increment'})
},3000)


// console.log(store.getState())
// store.dispatch({type: 'increment'})