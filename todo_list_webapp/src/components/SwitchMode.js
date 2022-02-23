import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SwitchMode = () => {
  const dispatch = useDispatch();
  const taskView = useSelector(state => state.taskView); //all or completed

  const showAllTasks = () => {
    dispatch({
      type: 'SHOW_ALL_TASKS',
    });
  };

  const showCompletedTasks = () => {
    dispatch({
      type: 'SHOW_COMPLETED_TASKS',
    });
  };

  const taskBtnStyle1 = {
    borderBottom: taskView === 'all' ? '2px solid blue' : 'none',
    borderRight: taskView === 'all' ? '2px solid blue' : 'none',
  }

  const taskBtnStyle2 = {
    borderBottom: taskView === 'completed' ? '2px solid blue' : 'none',
    borderLeft: taskView === 'completed' ? '2px solid blue' : 'none',
  }
  

  return (
    <div className='switch-mode'>
      <div style={taskBtnStyle1} className='all' onClick={showAllTasks}> All Tasks </div>
      <div style={taskBtnStyle2} className='completed' onClick={showCompletedTasks} > Completed </div>
    </div>
  )
}

export default SwitchMode