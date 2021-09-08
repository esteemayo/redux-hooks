import { v4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './../actions/todoActions';
import Button from './Button';

const actionDispatch = (dispatch) => ({
    createTodo: (todo) => dispatch(addTodo(todo)),
});

const TodoInput = () => {
    const { createTodo } = actionDispatch(useDispatch());
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() === '') return;

        const newTodo = {
            id: v4(),
            name: todo,
            complete: false,
        };

        createTodo(newTodo);
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-div'>
                <input type='text'
                    name='todo'
                    placeholder='Add a todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />

                <Button text='Add Todo' />
            </div>
        </form>
    );
};

export default TodoInput;
