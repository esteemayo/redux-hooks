import { v4 } from 'uuid';

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/types';

const initialState = {
    todos: [
        {
            id: v4(),
            name: 'Go to the gym',
            complete: false,
        },
        {
            id: v4(),
            name: 'Do laundry',
            complete: true,
        },
    ],
};

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload],
            };

        case TOGGLE_TODO:
            const updTodo = state.todos.map(todo => (
                todo.id === payload ? { ...todo, complete: !todo.complete } : todo
            ));

            return {
                ...state,
                todos: updTodo,
            };

        case DELETE_TODO:
            const newTodo = state.todos.filter(todo => todo.id !== payload);

            return {
                ...state,
                todos: newTodo,
            };

        default:
            return state;
    };
};

export default todoReducer;
