import { writable } from "svelte/store";

function createSessionWritable(key: string, initialValue: any) {
  const storedValue = sessionStorage.getItem(key);
  const value = storedValue ? JSON.parse(storedValue) : initialValue;

  const store = writable(value);

  store.subscribe(($store) => {
    sessionStorage.setItem(key, JSON.stringify($store));
  });

  return store;
}

export const attempts = createSessionWritable("attempts", 3);
export const font = createSessionWritable("font", "mono");
export const isHiragana = createSessionWritable("isHiragana", false);
export const mute = createSessionWritable("mute", false);
export const displayScore = createSessionWritable("displayScore", false);
export const doNotAskAgain = createSessionWritable("askAgain", false);
export const characterFilter = createSessionWritable("characterFilter", {
  standard: true,
  voiced: false,
  compound: false,
});

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
export const isDarkMode = writable(prefersDark.matches);
prefersDark.addEventListener("change", (e) => {
  isDarkMode.set(e.matches);
});
