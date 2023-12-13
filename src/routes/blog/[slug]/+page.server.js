import { error } from '@sveltejs/kit';
import { posts } from '../posts.js';
import { count } from '$lib/stores/stores.js';

export function load({ params, $count }) {
	const post = posts.find((post) => post.slug === params.slug);
	count.set(post.reads);
	count.increment;
    
    if (!post) throw error(404);

	return {
		post
	};
}



