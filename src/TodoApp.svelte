<script lang="ts">
  import Todo from "./lib/Todo.svelte";
  import "./app.css";

  let dataTodo = $state([]);
// log the dataTodo array to the console

  const remove = (id) => {
   dataTodo = dataTodo.filter((todo) => todo.id !== id)// remove the last element
    // remove the last element
  };

  // const remove = () => {
  //   dataTodo.shift(); // remove the last element
  // }

  // initialize title variable
  function add(e) {
    e.preventDefault(); // prevent the default form submission behavior
    const input = document.getElementById("input") as HTMLInputElement; // get the input field
    const todo = {
      id: dataTodo.length + 1, // generate a unique id for the todo),
      name: input.value, // get the value from the input field
      completed: false,
    };
    dataTodo.push(todo);
    input.value = "";  // add the new todo to the list// clear the input field
  }
</script>

<button onclick={remove} class="btn btn-danger">Remove</button>

<form class="flex flex-row gap-2 my-4">
  <input type="text" name="todo" id="input" class="input" />
  <button class="btn btn-warning btn-outline" onclick={add}>Tambah</button>
</form>

<ul class="list-disc list-outside">
  {#each dataTodo as todo (todo.id)}
    <!-- content here -->
    <li class="my-4">
      <Todo {...todo} />
      <button
        onclick={() => remove(todo.id)}
        class="bg-red-500 cursor-pointer hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Remove
      </button>
    </li>
  {/each}
</ul>
