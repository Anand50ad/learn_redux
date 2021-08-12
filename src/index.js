import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
//for redux we need store, action and reducer


//action
const increment = () =>{
  return{
    type : "INCREMENT"
  }
}
const decrement = () =>{
  return {
    type: "DECREMENT"
  }
}

//reducer will tell what is supposed to happen when we perform an action
const counter = (state=0, action) =>{
  switch(action.type){
    case "INCREMENT":
      return state+1
    
    case "DECREMENT":
      return state-1  

  }
}

//store will store all the states
let store = createStore(counter);

//to display our counter in the console
store.subscribe(()=> console.log(store.getState()));

//dispatcher
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


