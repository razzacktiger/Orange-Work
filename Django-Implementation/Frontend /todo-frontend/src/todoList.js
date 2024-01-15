import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/todos/')
            .then(response => {
                setTodos(response.data);
            });
    }, []);

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.completed ? 'Done' : 'Not done'}</p>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
