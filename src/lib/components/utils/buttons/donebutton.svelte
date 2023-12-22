<script>
    import Done from '$lib/assets/icons/done.svelte'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function eventClickMe() {
        dispatch('done', {
            text: 'Pass to main component'
        });
    }
</script>

<button on:click={eventClickMe}>
    <Done />
</button>