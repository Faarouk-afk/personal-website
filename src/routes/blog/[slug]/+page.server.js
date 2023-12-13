import { error } from '@sveltejs/kit';
import { posts } from '../../../lib/stores/posts.js';

export function load({ params, $count }) {
	const post = posts.find((post) => post.slug === params.slug);
    
    if (!post) throw error(404);

	return {
		post
	};
}



