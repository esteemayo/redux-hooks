import { BiTrash } from 'react-icons/bi';
import { createSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTodo, toggleTodo } from '../actions/todoActions';
import { makeSelectTodos } from '../actions/selectors';

const stateSelector = createSelector(makeSelectTodos, (todos) => ({
    todos,
}));

const actionDispatch = (dispatch) => ({
    onDelete: (id) => dispatch(deleteTodo(id)),
    onToggle: (id) => dispatch(toggleTodo(id)),
});

const TodoList = () => {
    const { todos } = useSelector(stateSelector);
    const { onDelete, onToggle } = actionDispatch(useDispatch());

    return (
        <ul className='todo-list'>
            {todos.map(todo => {
                const { id, name, complete } = todo;
                return (
                    <li key={id}>
                        <input
                            type='checkbox'
                            checked={complete}
                            onChange={() => onToggle(id)}
                        />
                        <span className={complete ? 'complete' : null} >{name}</span>
                        <span
                            className='delete-button'
                            onClick={() => onDelete(id)}
                        >
                            <BiTrash />
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;
