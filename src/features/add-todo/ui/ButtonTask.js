import React from 'react'
import { todos } from '~/features/add-todo'

export const ButtonTask = () => {
	return (
		<button
			className='flex-no-shrink p-2 border-2 rounded text-zinc-300 border-secondary-darken hover:text-white'
			onClick={todos.submit}
		>
			Add
		</button>
	)
}
