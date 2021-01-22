import React from 'react'
import Todo from './Todo'

const ToDoList = ({ todos, checkTodo}) => {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<Todo key={todo.id} title={todo.title} checkTodo={checkTodo} id={todo.id}/>
				)
			})}
 	
		</div>
	)
}

export default ToDoList
