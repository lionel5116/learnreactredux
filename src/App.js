import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions/actions';



function App() {
  const counter = useSelector(state => state.counterReducer)
  const islogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      {islogged ? <h3>Valuable Info view allowed </h3> : ''}
    </div>
  );
}

export default App;
