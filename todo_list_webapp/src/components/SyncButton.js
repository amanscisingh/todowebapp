import React from 'react'
import Sync from '../images/sync.svg' 
import { useSelector, useDispatch } from 'react-redux';
import { updateAllTodos } from '../actions/apiActions';

const SyncButton = () => {
    const dispatch = useDispatch();
    const isSyncing = useSelector(state => state.isSyncing);
    const rotateOptions = isSyncing ? 'rotate' : '';
    const email = useSelector(state => state.email)
    const allTasks = useSelector(state => state.allTasks)
    const completedTasks = useSelector(state => state.completedTasks)
    const body = {
        email,
        all: allTasks,
        completed: completedTasks,
    }

    const syncBtnStyle = {
        position: 'fixed',
        top: '22px',
        right: '15px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        zIndex: '999',
    }

    const imageStyle = {
        width: '40px',
        height: '40px',
    }

    const toggleSyncing = () => {
        dispatch(updateAllTodos(email, body));
    }

  return (
    <div onClick={toggleSyncing} style={syncBtnStyle}> <img className={rotateOptions}  style={imageStyle} src={Sync} alt="Sync To Database" /> </div>
  )
}

export default SyncButton