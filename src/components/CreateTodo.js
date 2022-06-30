import React from 'react';
import './TodoList.css'
const CreateTodo= ({todo, onChange, onCreate}) => {
    return (
        <div>
            <header>
                <h1>to do list</h1>
                <div id='todo_box'>
                    <input name="todo" value = {todo} onChange={onChange}/>
                    <button onClick={onCreate}>+</button>
                </div>
            </header>
        </div>
    );
};

export default CreateTodo;