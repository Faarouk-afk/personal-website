import { posts } from '$lib/stores/posts.js';

export function load() {

	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			reads: post.reads,
			src: post.src,
			visited: post.visited
		}))
	};
}