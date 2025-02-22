import { writable } from "svelte/store";

export const attempts = writable(3);
export const isDarkMode = writable(false);
export const mute = writable(false);
export const displayScore = writable(false);
export const characterFilter = writable({
  standard: true,
  voiced: true,
  compound: true,
});
