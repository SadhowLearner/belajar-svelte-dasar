import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
// import { derived } from 'svelte/store';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        derived: "derived.html",
        global_state: "global-state.html",
        auto_counter: "auto-counter.html",
        user: "user.html",
        todo: "todo.html",
        article: "article.html",
        time: "time.html",
        box: "box.html",
        store_counter: "store-counter.html",
        box: "box.html",
        context_counter: "context-counter.html",
        mouse: "mouse.html",
      },
    },
  },
});
