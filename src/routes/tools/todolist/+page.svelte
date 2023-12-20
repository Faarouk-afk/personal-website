<script>
    import Taskdone from '$lib/components/taskdone.svelte'
    import Tasktodo from '$lib/components/tasktodo.svelte'
</script>


<h1>Todo List</h1>

<div class="flex flex-col w-full lg:flex-row">
    <div class="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <h2>Todo</h2>
        <div class="card w-96 bg-base-100 shadow-xl">
            <Tasktodo />
        </div>
    </div> 
    <div class="divider lg:divider-horizontal"></div> 
    <div class="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <h2>In progress</h2>
        <div class="card w-96 bg-base-100 shadow-xl">
            
        </div>
    </div>
    <div class="divider lg:divider-horizontal"></div> 
    <div class="grid flex-grow h-32 card bg-base-100 rounded-box place-items-center">
        <h2>Done</h2>
        <div class="card w-96 bg-base-100 shadow-xl">
            <Taskdone />
        </div>
    </div>
</div>