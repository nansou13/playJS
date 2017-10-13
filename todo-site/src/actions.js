import { get, add, toggle } from './client';

export function addTodo(text) {
    return (dispatch) => {
        add(text)
            .then(get)
            .then((todos) => dispatch(receiveTodos(todos)))
            .catch((err) => dispatch(error(err)));
    };
}

export function toggleTodo(id) {
    return (dispatch) => {
        toggle(id)
            .then(get)
            .then((todos) => dispatch(receiveTodos(todos)))
            .catch((err) => dispatch(error(err)));
    };
}

export function retrieveTodos() {
    return (dispatch) => get()
        .then((todos) => dispatch(receiveTodos(todos)))
        .catch((err) => dispatch(error(err)))
}

function receiveTodos(todos) {
    return {
        type: 'RECEIVE_TODOS',
        payload: todos
    }
}

function error(err) {
    return {
        type: 'ERROR',
        payload: err
    };
}
