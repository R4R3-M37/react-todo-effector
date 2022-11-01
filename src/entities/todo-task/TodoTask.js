import React from 'react'

export const TodoTask = ({ title, remove, done, isDone, index }) => {
	return (
		<div className='flex mb-4 items-center'>
			<p className={`w-full text-zinc-200 ${isDone && 'line-through'}`} style={{ wordWrap: 'anywhere' }}>{`${
				index + 1
			}. ${title}`}</p>
			<button
				className='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-zinc-500 border-secondary-darken hover:bg-green'
				onClick={done}
			>
				{isDone ? 'Not Done' : 'Done'}
			</button>
			<button
				className='flex-no-shrink p-2 ml-2 border-2 rounded text-zinc-500 border-secondary-darken hover:text-white hover:bg-red'
				onClick={remove}
			>
				Remove
			</button>
		</div>
	)
}
