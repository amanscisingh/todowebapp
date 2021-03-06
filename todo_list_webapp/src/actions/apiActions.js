import axios from "axios"
const BASE_URL = 'https://todo-backend-amansingh.herokuapp.com/todos'

export const fetchAllTodos = (email) => {

    return function(dispatch) {
        dispatch({type: "TOGGLE_SYNCING"})

        axios.get(BASE_URL + `?email=${email}`)
            .then(response => {
                console.log(response.data)
                dispatch({type: 'FETCH_TODOS_SUCCESS', payload: response.data})
                dispatch({type: 'CLEAR_API_ERROR'})
            })
            .catch(error => {
                dispatch({type: 'FETCH_TODOS_ERROR', payload: error.message})
            })
    }
}

export const updateAllTodos = (email, body) => {
    return function(dispatch) {
        dispatch({type: "TOGGLE_SYNCING"})

        axios.post(BASE_URL+`?email=${email}`, body)
            .then(response => {
                console.log(response.data)
                dispatch({type: 'FETCH_TODOS_SUCCESS', payload: response.data})
                dispatch({type: 'CLEAR_API_ERROR'})
            })
            .catch(error => {
                dispatch({type: 'FETCH_TODOS_ERROR', payload: error.message})
            })

    }
}