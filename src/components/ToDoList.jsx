import React from 'react'
import Todo from './Todo'

const ToDoList = ({ todos }) => {
	return (
		<div>
			{todos.map((todo) => {
				return (
					<Todo key={todo.id} title={todo.title} />
				)
			})}
 	
		</div>
	)
}

export default ToDoList
