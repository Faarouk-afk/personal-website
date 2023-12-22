import { writable } from 'svelte/store';

export function createTodoStore(initial) {
	let uid = 1;

	const todos = initial.map(({ done, inprogress, description }) => {
		return {
			id: uid++,
			done,
            inprogress,
			description
		};
	});

	const { subscribe, update } = writable(todos);

	return {
		subscribe,
		add: description => {
			const todo = {
				id: uid++,
				done: false,
                inprogress: false,
				description
			};

			update($todos => [...$todos, todo])
		},
		remove: todo => {
			update($todos => $todos.filter((t) => t !== todo));
		},
        pause: (todo, inprogress) => {
			update($todos => [
				...$todos.filter((t) => t !== todo),
				{ ...todo, inprogress }
			]);
		},
        done: (todo, done) => {
			update($todos => [
				...$todos.filter((t) => t !== todo),
				{ ...todo, done }
			]);
		}
	};
}
