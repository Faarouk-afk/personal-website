<script>
    import Tasktodo from '$lib/components/tasktodo.svelte'
    import { createTodoStore } from '$lib/utils/todos.js';

    const todos = createTodoStore([
		{ done: false, inprogress: false, description: 'Create an interractive todo list' },
		{ done: false, inprogress: false, description: 'start writing blog post' },
		{ done: true, inprogress: false, description: 'Come up with time measurements' },
		{ done: false, inprogress: false, description: 'Create a lesson in Canvas or so' },
		{ done: false, inprogress: true, description: 'Create the presentation of the business' },
		{ done: false, inprogress: true, description: 'fix some bugs' },
        { done: false, inprogress: false, description: 'Host a basic ai chat app with basic layout' },
        { done: false, inprogress: false, description: 'Daily plan challenge' }
	]);
</script>


<h1>Todo List</h1>

<div class="flex flex-col w-full lg:flex-row">
    <div class="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <h2>Todo</h2>
        <div class="card w-96 bg-base-100 shadow-xl">
            {#each $todos.filter((todo) => todo.done === false && todo.inprogress === false) as todo (todo.id)}
                <Tasktodo description={todo.description} inprogress={todo.inprogress} done={todo.done} on:remove={() => todos.remove(todo)} on:pause={() => todos.pause(todo, !todo.inprogress)} on:done={() => todos.done(todo, !todo.done)} />
            {/each}
        </div>
    </div> 

    <div class="divider lg:divider-horizontal"></div> 

    <div class="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <h2>In progress</h2>
        <div class="card w-96 bg-base-100 shadow-xl">
            {#each $todos.filter((todo) => todo.done === false && todo.inprogress === true) as todo (todo.id)}
                <Tasktodo description={todo.description} inprogress={todo.inprogress} done={todo.done} on:remove={() => todos.remove(todo)} on:pause={() => todos.pause(todo, !todo.inprogress)} on:done={() => todos.done(todo, !todo.done)} />
            {/each}
        </div>
    </div>

    <div class="divider lg:divider-horizontal"></div> 

    <div class="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <h2>Done</h2>
        <div class="card w-96 bg-base-100 shadow-xl">
            {#each $todos.filter((todo) => todo.done === true) as todo (todo.id)}
                <Tasktodo description={todo.description} inprogress={todo.inprogress} done={todo.done} on:remove={() => todos.remove(todo)} on:done={() => todos.done(todo, !todo.done)} />
            {/each}
        </div>
    </div>
</div>