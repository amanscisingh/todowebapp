import React from 'react'
import Button from './Button';
import { useDispatch } from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();
  const clearCompletedTasks = () => {
    dispatch({
      type: 'CLEAR_COMPLETED_TASKS'
    });
  };


  return (
    <div className='footer'>
      <Button onClick={clearCompletedTasks} text="Remove Completed Tasks" color="blue" />
    </div>
  )
}

export default Footer