import React from 'react';
import './TodoList.css'
const Todo = ({todo, onDelete, onToggle}) => {
    return (
        <div id= "todo">
            <span id="todotodo" className={todo.active ? 'active': ""} onClick={()=>{onToggle(todo.id) }}>{todo.todo}</span>
            <button id="delBtn" onClick={()=>{
                onDelete(todo.id);
            }}>X</button>
        </div>
    )
}

const TodoList = ({todos, onDelete, onToggle}) => {
    return (
        <div class="lists">
            {todos.map(todo =><Todo todo={todo} key={todo.id} onDelete={onDelete} onToggle={onToggle}/> )}
        </div>
    );
};



export default TodoList;