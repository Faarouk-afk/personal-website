import { writable } from 'svelte/store';

function incrementReads() {
  const { subscribe, set, update } = writable(0);


  return {
    subscribe,
    increment: () => update((n) => n + 1),
    reset: () => set(n)
  };
}

export const count = incrementReads();
