import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});
