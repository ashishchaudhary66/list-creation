import React from 'react';
import DashBoard from './components/DashBoard';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='App'> 
      <div>
        {count}
      </div>
      <div onClick={()=>dispatch(increment())}>+</div>
      <div onClick={()=>dispatch(decrement())}>-</div>
      <DashBoard />
    </div>
  );
};

export default App;