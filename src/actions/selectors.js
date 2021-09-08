import { createSelector } from 'reselect';

const todoPageState = (state) => state.todoPage;

export const makeSelectTodos = createSelector(
    todoPageState,
    todoPage => todoPage.todos,
);
