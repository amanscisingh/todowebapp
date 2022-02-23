import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';

const AllTasks = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector(state => state.allTasks);
  const completedTasks = useSelector(state => state.completedTasks);
  const taskView = useSelector(state => state.taskView); //all or completed
  const toggleTaskStatus = (id) => {
    dispatch({
      type: 'TOGGLE_TASK_STATUS',
      payload: {
        id: id,
      },
    });
  }

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: {
        id: id,
      },
    });
  }


  if(taskView === 'all' && allTasks.length !== 0) {
    return (
      <div className='all-tasks'>
        {
          allTasks.map(({id, title, isDone}) => {
            return (
              <Task toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} key={id} id={id} title={title} isDone={isDone} showDeleteBtn={true} />
            )
          })
        }
      </div>
    )
  } else if(taskView === 'completed' && completedTasks.length !== 0) {
    return (
      <div className='all-tasks'>
        {
          completedTasks.map(({id, title, isDone}) => {
            return (
              <Task toggleTaskStatus={() => { console.log('disabled') }} deleteTask={() => { console.log('disabled') }} key={id} id={id} title={title} isDone={isDone} showDeleteBtn={false} />
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className='all-tasks'>
        <p>No tasks to show</p>
      </div>
    )
  }

}

export default AllTasks