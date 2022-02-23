import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';

const InputTask = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.errorMessage);
  const displayError = useSelector(state => state.displayError);
  const errorStyle = {
    display: displayError ? 'block' : 'none',
    color: 'red',
    position: 'relative',
    top: '-8px',
    marginTop: '5px',

  }

  const allTasks = useSelector(state => state.allTasks);
  const taskInput = useSelector(state => state.taskInput);
  console.table(allTasks);

  const handleChange = (e) => {
    if (e.target.value.length >= 5) {
      dispatch({
        type: 'HIDE_ERROR',
      });
    }

    dispatch({
      type: 'UPDATE_TASK_INPUT_VALUE',
      payload: {
        title: e.target.value,
      },
    });
  };
    
    const addTask = () => {
      if (taskInput.length >= 5) {
        dispatch({
          type: 'ADD_TASK'
        });

        dispatch({
          type: 'HIDE_ERROR',
        });

      } else {
        dispatch({
          type: 'SHOW_ERROR',
          payload: {
            errorMessage: 'Task must be at least 5 characters long',
          },
        })
      }
  }

  const inputBoxStyle = {
    width: '70%',
    height: '30px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px',
    fontSize: '16px',
  }

  const handleKeyUp = (e) => {
    if(e.keyCode === 13) {
      addTask();
    }
  }

  return (
    <div className='input-task'>
      <input name="taskName" type="text" style={inputBoxStyle} placeholder="Type task here..." onKeyUp={(e)=> handleKeyUp(e) } value={taskInput} onChange={ (e) => { handleChange(e) } } />
      <label htmlFor="taskName" style={errorStyle}>{errorMessage}</label>
      <Button onClick={addTask} color="green" text="ADD" />

    </div>
  )
}

export default InputTask;