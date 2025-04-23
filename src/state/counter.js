import { writable } from "svelte/store";

export const counter = writable(0);
counter.subscribe((val) => console.log(val))