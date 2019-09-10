import { SAVE_COMMENT, FETCH_COMMENT, CHANGE_AUTH } from 'actions/types'
import axios from 'axios'

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments')
        //   fetch('https://jsonplaceholder.typicode.com/todos/1')
        //   .then(response => response.json())
        //   .then(json => console.log(json))
    return {
        type: FETCH_COMMENT,
        payload: response
    }
}

export const changeAuth = (isLoggedIn) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}