<script>
	export let data;
	import { count } from '$lib/stores/stores.js';

</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
<div>
	<p>read:{data.post.reads} count:{$count}</p>
</div>