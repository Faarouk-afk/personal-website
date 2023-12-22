<script>
    import Remove from '$lib/assets/icons/remove.svelte'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function eventClickMe() {
        dispatch('remove', {
            text: 'Pass to main component'
        });
    }
</script>

<button on:click={eventClickMe}>
    <Remove />
</button>