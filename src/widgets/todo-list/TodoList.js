import React from 'react'
import { TodoTask } from '~/entities/todo-task/TodoTask'
import { useList } from 'effector-react'
import { todos } from '~/features/add-todo'

export const TodoList = () => {
	const todoList = useList(todos.$todos, (todo, index) => (
		<TodoTask
			title={todo.value}
			isDone={todo.isDone}
			done={() => todos.done(index)}
			remove={() => todos.remove(index)}
			index={index}
		/>
	))

	return <div>{todoList}</div>
}
