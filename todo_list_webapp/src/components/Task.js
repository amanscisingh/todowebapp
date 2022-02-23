import React from 'react'

const Task = ({id, title, isDone, toggleTaskStatus, deleteTask, showDeleteBtn}) => {

  const taskStyle = {
    backgroundColor: isDone ? 'rgb(255, 168, 168)' : '#ccc',
  }

  const textStyle = {
    textDecoration: isDone ? 'line-through' : 'none',
  }

  const deleteBtnStyle = {
    display: showDeleteBtn ? 'flex' : 'none',
  }


  return (
    <div className='task-container' style={taskStyle}>
      <div onClick={()=> { toggleTaskStatus(id) }} style={textStyle} className="task">{title}</div>
      <div style={deleteBtnStyle} onClick={() => { deleteTask(id) }} className="delete-btn">❌</div>
    </div>
  )
}

export default Task