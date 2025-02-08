import { writable } from "svelte/store";

export const attempts = writable(3);
export const mute = writable(false);
