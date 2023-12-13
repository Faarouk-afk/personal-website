import { posts } from '../../lib/stores/posts.js';

export function load() {
    // to remove // const visited = cookies.get('visited');

    // to remove // cookies.set('visited', 'true', { path: '/blog/${post.slug}' });

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