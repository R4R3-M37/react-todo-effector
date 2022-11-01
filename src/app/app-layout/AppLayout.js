import React from 'react'

export const AppLayout = ({ children }) => {
	return (
		<div className='h-full w-full flex items-start justify-center bg-secondary-darken font-sans'>
			<div className='bg-primary-darken rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>{children}</div>
		</div>
	)
}
