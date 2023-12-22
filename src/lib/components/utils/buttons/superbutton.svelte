<script>
    import Pause from '$lib/assets/icons/pause.svelte';
    import Start from '$lib/assets/icons/start.svelte';
    import Undone from '$lib/assets/icons/repeat.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function eventStratPause() {
        dispatch('pause', {
            text: 'Pass to main component'
        });
    };

    function eventUndone() {
        dispatch('done', {
            text: 'Pass to main component'
        });
    };

    export let inprogress;
    export let done;
</script>



{#if done}
    <button on:click={eventUndone}>
        <Undone /> 
    </button>

{:else if inprogress}
    <button on:click={eventStratPause}>
        <Pause /> 
    </button>

{:else}

    <button on:click={eventStratPause}>
        <Start /> 
    </button>
{/if}
