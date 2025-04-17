<script>
  import Todo from "./lib/Todo.svelte";
  import "./app.css";

  const dataTodo = $state([
    { id: 1, name: "Makan", done: true },
    { id: 2, name: "Menjadi Kaya", done: false },
    { id: 3, name: "Belajar Boxing", done: false },
  ]);

  const remove = () => {
    dataTodo.shift(); // remove the last element
  };
</script>

<button
  onclick={remove}
  class="bg-red-500 cursor-pointer hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
>
  Remove Todo
</button>
<ul class="list-disc list-outside">
  {#each dataTodo as todo (todo.id)}
    <!-- content here -->
    <li><Todo {...todo} /></li>
  {/each}
</ul>
