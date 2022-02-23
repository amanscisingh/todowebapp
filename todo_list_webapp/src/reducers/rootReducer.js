const  initState = {
    taskInput: '',
    user: {
        email: '',
        name: '',
    },
    allTasks : [
        { id: 1, title: 'Task 1', isDone: false,  },
    ],
    completedTasks : [],
    taskView: 'all',
    errorMessage: '',
    displayError: false,
    isSyncing: false,
}

const rootReducer = (state=initState, action) => {
    switch(action.type) {
        case 'UPDATE_TASK_INPUT_VALUE':
            return {
                ...state,
                taskInput: action.payload.title,
            }
        case 'ADD_TASK':
            return {
                ...state,
                allTasks: [
                    ...state.allTasks,
                    {
                        id: state.allTasks.length + 1,
                        title: state.taskInput,
                        isDone: false,
                    }
                ],
                taskInput: '',
            }
        case 'TOGGLE_TASK_STATUS':
            return {
                ...state,
                allTasks : state.allTasks.map((task, ind) => {
                    if(task.id === action.payload.id) {
                        return { 
                            id: state.allTasks[ind].id, 
                            title: state.allTasks[ind].title, 
                            isDone: !state.allTasks[ind].isDone  
                        }
                    } else {
                        return task
                    }
                }) 
            }

        case 'DELETE_TASK':
            return {
                ...state,
                allTasks : state.allTasks.filter( task => task.id !== action.payload.id)
            }

        case 'CLEAR_COMPLETED_TASKS':
            const completedTasks = state.allTasks.filter(task => task.isDone);
            return {
                ...state,
                allTasks : state.allTasks.filter( task => !task.isDone),
                completedTasks: [
                    ...state.completedTasks,
                    ...completedTasks
                ]
            }

        case 'SHOW_ALL_TASKS':
            return {
                ...state,
                taskView: 'all',
            }

        case 'SHOW_COMPLETED_TASKS':
            return {
                ...state,
                taskView: 'completed',
            }

        case 'SHOW_ERROR':
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
                displayError: true,
            }

        case 'HIDE_ERROR':
            return {
                ...state,
                errorMessage: '',
                displayError: false,
            }

        case 'TOGGLE_SYNCING':
            return {
                ...state,
                isSyncing: !state.isSyncing,    
            }
        
        default:
            return state;
    }
}

export default rootReducer;