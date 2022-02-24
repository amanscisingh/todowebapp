import axios from "axios"
const BASE_URL = 'http://localhost:8000/todos'

export const fetchAllTodos = (email) => {

    return function(dispatch) {
        dispatch({type: "TOGGLE_SYNCING"})

        axios.get(BASE_URL + `?email=${email}`)
            .then(response => {
                console.log(response.data)
                dispatch({type: 'FETCH_TODOS_SUCCESS', payload: response.data})
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
            })
            .catch(error => {
                dispatch({type: 'FETCH_TODOS_ERROR', payload: error.message})
            })

    }
}