<script>
    import RemoveButton from '$lib/components/utils/buttons/removebutton.svelte';
    import StartPauseButton from '$lib/components/utils/buttons/superbutton.svelte';
    import DoneButton from '$lib/components/utils/buttons/donebutton.svelte';
    
    import Checked from '$lib/assets/icons/checked.svelte';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let done;
    export let inprogress;
    export let description;
  
    function forwardRemove(event) {
     dispatch('remove', event.detail);
    };

    function forwardPause(event) {
     dispatch('pause', event.detail);
    };

    function forwardDone(event) {
     dispatch('done', event.detail);
    };
</script>



<div id="task" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
    <div class="inline-flex items-center space-x-2">
        <!-- placeholder for done and checked -->
        {#if done}
            <div>
                <Checked />                         
            </div>
            <div class="text-slate-500 line-through">{description}</div>

        {:else}
            <div>
                <DoneButton on:done={forwardDone}/>                 
            </div>
            <div>{description}</div>
        {/if}
    </div>

    <div>
        <StartPauseButton inprogress={inprogress} done={done} on:pause={forwardPause} on:done={forwardDone}/>
    </div>

    <div>
        <RemoveButton on:remove={forwardRemove} />                     
    </div>
</div>