import { writable } from 'svelte/store';

// Get the value out of storage on load.
const post = localStorage.content

// Get the value out of storage on load.
const stored = localStorage.content
// or localStorage.getItem('content')

summaries: posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    reads: post.reads,
    src: post.src,
    visited: post.visited
})
)

// Set the stored value or a sane default.
export const content = writable(stored || 'Hello, World!')

// Anytime the store changes, update the local storage value.
content.subscribe((value) => localStorage.content = value)
