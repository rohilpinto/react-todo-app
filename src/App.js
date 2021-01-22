import React , {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'play',
      isCompleted: 'false'
    },

    {
      id: 2,
      title: 'Something',
      isCompleted: 'false'
    },

    {
      id: 3,
      title: 'aslfjklasfk',
      isCompleted: 'false'
    }


  ])


  // add a todo

  const addTodo = (text) => {
    const newTodo = {
      id: 5,
      title: text,
      isCompleted: false
    };
     setTodos([...todos, newTodo])
  }
  return <div>
    <ToDoForm addTodo={addTodo} />
    <ToDoList todos={todos} />
  </div>;
}


export default App;
