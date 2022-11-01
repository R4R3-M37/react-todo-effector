import React from 'react'
import { useStore } from 'effector-react'
import { todos } from '~/features/add-todo'

export const InputTask = () => {
	const input = useStore(todos.$input)

	const handleChangeInput = (e) => {
		todos.change(e.target.value)
	}

	return (
		<input
			className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-zinc-300 bg-primary-darken border-secondary-darken'
			value={input.value}
			onChange={handleChangeInput}
			placeholder='Add Todo'
			type='search'
		/>
	)
}
