import './App.css';
import { useState, useRef } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

function App() {
    const [ inputs, setInputs ] = useState({
      todo:"",
    });
    const onChange = (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]:value
      })
      console.log(inputs);
    }
    const { todo } = inputs;
    const [ todos, setTodos] = useState([

    ])
    const nextId = useRef(1);
    const onCreate= () => {
    const todolist = {
      id:nextId.current,
      todo,
    }

    setTodos([...todos, todolist]);
    setInputs({
      todo:"",
    })
    nextId.current +=1; 
  }
  const onDelete = (id) => {
    setTodos(todos.filter(todolist=> id !== todolist.id));
  }
  const onToggle = (id) => {
    setTodos(todos.map(todolist=> id === todolist.id ? {...todolist, active: !todolist.active} : todolist ));
  }
  return (
    <div className="App">
        <CreateTodo todo={todo} onChange={onChange} onCreate={onCreate} />
        <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}


export default App;
