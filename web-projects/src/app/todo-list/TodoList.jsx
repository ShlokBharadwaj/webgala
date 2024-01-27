import React, { useState, useEffect } from 'react';
import styles from './TodoList.module.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');

    const addTodo = () => {
        if (!todoText.trim()) {
            return;
        }

        const newTodos = [...todos, { text: todoText, complete: false }];
        setTodos(newTodos);
        setTodoText('');
    };

    const removeTodo = (index) => {
        setTodos((prevTodos) => {
            const newTodos = [...prevTodos];
            newTodos.splice(index, 1);
            return newTodos;
        });
    };

    const toggleTodoClick = (index) => {
        setTodos((prevTodos) => {
            const newTodos = [...prevTodos];
            newTodos[index].complete = !newTodos[index].complete;
            return newTodos;
        });
    };

    const handleTodoContextMenu = (e, index) => {
        e.preventDefault();
        removeTodo(index);
    };

    const updateLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo();
    };

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    };

    const fetchTodosFromLocalStorage = () => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    };

    useEffect(() => {
        fetchTodosFromLocalStorage();
    }, []);

    useEffect(() => {
        updateLocalStorage();
    }, [todos]);

    return (
        <div className={`${styles.container} bg-[#f8f9fa] text-black flex flex-col items-center justify-center min-h-screen m-0 box-border`}>
            <h1 className="text-[11rem] text-[#0077b6] text-center opacity-50">todos</h1>
            <form className="shadow-2xl max-w-full w-96" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="border-none text-[#444] text-4xl pt-4 pb-4 pl-8 pr-8 block w-full focus:outline-[#0077b6] opacity-50 text-center"
                    placeholder="your todos here"
                    autoComplete="off"
                    value={todoText}
                    onChange={handleInputChange}
                />
                <ul className={`${styles.todos} bg-white p-0 m-0`}>
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className={`${styles.todo} border-t border-[#e0e0e0] text-[#444] text-2xl pt-4 pb-4 pl-8 pr-8 block w-full focus:outline-[#0077b6] opacity-50 text-center cursor-pointer ${todo.complete ? styles.complete : ''}`}
                            onClick={() => toggleTodoClick(index)}
                            onContextMenu={(e) => handleTodoContextMenu(e, index)}
                        >
                            {todo.text}
                        </li>
                    ))}
                </ul>
            </form>
            <small className="text-[#b4b4b4] mt-12 text-center text-lg">left click to toggle complete</small>
            <small className="text-[#b4b4b4] text-center text-lg">right click to delete</small>
        </div>
    );
};

export default TodoList;
