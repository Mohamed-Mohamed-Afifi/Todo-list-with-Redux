// import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'reactstrap';
import List from './List';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearTodo } from './Redux/todoSlice';
import { useEffect, useRef, useState } from 'react';
const App = () => {
  const dispatch = useDispatch()
  const isEmpty = useSelector(state => state.list.empty)

  const refd = useRef(null);
  const handel = (e) => {
    if (refd.current.value !== '') {
      dispatch(addTodo(refd.current.value))
    } else {

      e.preventDefault();
    }
    console.log(refd.current.value)
  }
  const clearAll = () => {
    dispatch(clearTodo())
  }
  return (
    <div className="App">
      <div className='container col-6 '>
        <h1 className='heading'>Todolist</h1>
        <div className='add-groub d-flex col-12'>
          <input type="text" className="todo-input col-11" ref={refd} />
          <Button color="info" onClick={(e) => handel(e)} className="col-1">+</Button>
        </div>
        <List />
        <Button color="info" onClick={() => clearAll()} className="col-12">Clear</Button>
      </div>
    </div>
  );
}

export default App;
