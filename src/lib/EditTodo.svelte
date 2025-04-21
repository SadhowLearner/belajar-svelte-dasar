<script lang="ts">
  import { onMount } from "svelte";

  let { id, name, onedit } = $props();

  const save = () => {
    onedit(id, name);
  };

  let input;
  onMount(() => {
    input.focus();
    console.log(input);
  });
</script>

{id} --
<input
  {id}
  type="text"
  bind:value={name}
  bind:this={input}
  class="text-xl text-center w-min text-bold input"
/>
<button
  class="mx-auto my-2 text-center align-middle btn btn-soft w-fit rounded-2xl hover:bg-orange-700"
  onclick={save}>Save</button
>
