<script lang="ts">
  import Todo from "./lib/Todo.svelte";
  import EditTodo from "./lib/EditTodo.svelte";
  import { fade, fly } from "svelte/transition";
  import "./app.css";

  let dataTodo = $state([]);
  let input = $state(""); // initialize input variable
  // log the dataTodo rray to the console

  const edit = (id) => {
    for (let todo of dataTodo) {
      if (todo.id === id) {
        todo.edit = true;
      }
    }

    
  };

  const onEdit = (id, name) => {
    for (let todo of dataTodo) {
      if (todo.id === id) {
        todo.name = name;
        todo.edit = false; // update the todo with the new name
      }
    }
  };

  const remove = (id) => {
    dataTodo = dataTodo.filter((todo) => todo.id !== id); // remove the last element
    // remove the last element
  };

  // const remove = () => {
  //   dataTodo.shift(); // remove the last element
  // }

  // initialize title variable
  function add(e) {
    e.preventDefault(); // prevent the default form submission behavior
    const todo = {
      id: Date.now(), // generate a unique id for the todo),
      name: input, // get the value from the input field
      completed: false,
    };
    dataTodo.push(todo); // add the new todo to the list
    input = ""; // clear the input field
  }
</script>


{#snippet todoRow(todo)}
    <li class="my-4" out:fly={{y: 25, duration: 500}} in:fly={{y: -20, duration: 2000}}
      onintrostart={() => console.log("Animation started")}
      onintroend={() => console.log("Animation ended")}
      onoutrostart={() => console.log("Outro started")}
      onoutroend={() => console.log("Outro ended")}
    >
    

      {#if todo.edit}
        <EditTodo {...todo} onedit={onEdit} />
      {:else}
        <Todo {...todo} />
        <button
          onclick={() => {
            edit(todo.id);
          }}
          class="px-4 py-2 font-bold text-white bg-green-500 rounded cursor-pointer hover:bg-green-700"
        >
          Edit
        </button>
        <button
          onclick={() => remove(todo.id)}
          class="px-4 py-2 font-bold text-white bg-red-500 rounded cursor-pointer hover:bg-red-700"
        >
          Remove
        </button>
      {/if}
    </li>
{/snippet}
<!-- <button onclick={remove} class="btn btn-danger">Remove</button> -->

<form class="flex flex-row gap-2  my-4" onsubmit={add} transition:fly={{ y: 200 ,duration: 2000}}>
  <input type="text" name="todo" id="input" class="input" bind:value={input}/>
  <button type="submit" class="btn btn-warning btn-outline">Tambah</button>
</form>

<ul class="list-disc list-outside">
  {#each dataTodo as todo (todo.id)}
   {@render todoRow(todo)}
  {/each}
</ul>
