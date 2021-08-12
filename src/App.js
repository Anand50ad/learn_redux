import React from "react";
import {useSelector} from "react-redux";

function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=> state.isLogged);
  return (
    <div>
   <h1>Hello</h1>
   <h2>Counter {counter}</h2>
    <button>+</button>
    <button>-</button>
    {isLogged? <h3>For authorized person only</h3>:" "}
    </div>
  );
}

export default App;
