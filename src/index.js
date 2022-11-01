import React from 'react'
import ReactDOM from 'react-dom/client'

import '~/app/styles/tailwind.css'
import { AppLayout } from '~/app/app-layout/AppLayout'
import { TodoList } from '~/widgets/todo-list/TodoList'
import { CreateTask } from './widgets/create-task/CreateTask'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
	<AppLayout>
		<CreateTask />
		<TodoList />
	</AppLayout>
)
