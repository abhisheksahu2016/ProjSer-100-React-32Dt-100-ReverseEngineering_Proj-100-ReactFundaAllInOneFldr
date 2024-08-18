import {createStore} from 'react-redux';
 
const store = createStore(
 counterReducer,
 window.__REDUX__DEVTOOLS__EXTENSIONS__ && 
    window.__REDUX__DEVTOOLS__EXTENSION__()
);