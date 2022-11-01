import { createEvent, createStore, sample } from 'effector'

function createTodoListApi(initial = []) {
	const insert = createEvent()
	const remove = createEvent()
	const change = createEvent()
	const done = createEvent()
	const reset = createEvent()
	const submit = createEvent()

	const onTodoDone = (state, index) =>
		state.map((todo, i) => (i === index ? { ...todo, isDone: !todo.isDone } : todo))

	const $input = createStore({ value: '', isDone: false })
		.on(change, (_, value) => ({ value: value, isDone: false }))
		.reset(reset, insert)

	const $todos = createStore(initial)
		.on(insert, (todos, newTodo) => [...todos, newTodo])
		.on(done, onTodoDone)
		.on(remove, (todos, index) => todos.filter((_, i) => i !== index))

	sample({
		clock: submit,
		source: $input,
		target: insert
	})

	return {
		submit,
		done,
		change,
		remove,
		$input,
		$todos
	}
}

export const todos = createTodoListApi()
