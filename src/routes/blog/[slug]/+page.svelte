<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;

	const reads = writable();
	$: reads.set(data);
	
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
<div>
	<p>read:{data.post.reads} reads:{$reads.post.reads}</p>
</div>