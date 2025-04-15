<script>
  import { counter } from "../state/counter.svelte";

  const increament = () => {
    counter.count++
  }
</script>

<button onclick={increament} class="btn btn-outline btn-warning">increament : { counter.count } </button>