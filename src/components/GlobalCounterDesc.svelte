<script>
  import { counter } from "../state/counter.svelte";

  const descrement = () => {
    counter.count--
  }
</script>

<button onclick={descrement} class="btn btn-outline btn-warning">Descrement : { counter.count } </button>