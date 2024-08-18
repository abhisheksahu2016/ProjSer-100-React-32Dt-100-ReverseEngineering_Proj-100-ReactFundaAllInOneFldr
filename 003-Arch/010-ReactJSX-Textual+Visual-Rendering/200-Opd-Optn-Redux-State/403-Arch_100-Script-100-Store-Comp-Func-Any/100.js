import { 
    createStore 
} 
from 'redux'
  
function count(state = 0, action) { 
    switch (action.type) { 
        case 'INCR': 
            return state + 1 
        case 'DECR': 
            return state - 1 
        default: 
            return state 
    } 
} 
let sample_store = createStore(count) 
sample_store.subscribe(() => console.log(sample_store.getState())) 
sample_store.dispatch({ 
        type: 'INCR'
    }) //Output:1 
sample_store.dispatch({ 
        type: 'INCR'
    }) //Output:2 
sample_store.dispatch({ 
        type: 'DECR'
    }) //Output:1 