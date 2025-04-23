import { mount } from "svelte";
import "./app.css";
import StoreCounter from "./StoreCounterApp.svelte";

const app = mount(StoreCounter, {
  target: document.getElementById("app"),
});

export default app;
