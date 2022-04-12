import Axios from "axios"

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = Axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        Axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}