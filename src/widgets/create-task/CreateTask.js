import React from 'react'
import { InputTask } from '~/features/add-todo/ui/InputTask'
import { ButtonTask } from '~/features/add-todo/ui/ButtonTask'

export const CreateTask = () => {
	return (
		<div className='mb-4'>
			<h1 className='text-zinc-300'>Todo List</h1>
			<div className='flex mt-4'>
				<InputTask />
				<ButtonTask />
			</div>
		</div>
	)
}
