<script>
  // import validator from "daisyui/components/validator";
  import HelloSvelte from "./HelloSvelte.svelte";
  import { counter } from "../state/counter.svelte";

  let count = $state([])
  // let total = $derived(count.reduce((acc, val) => acc + val, 0))
  let total = $derived.by(
    () => {
      let total = 0;
      for (let i = 0; i < count.length; i++){
        total += count[i]
      }
      return total
    }
  )

  $inspect(total, count).with((type, values, valuec) => {
    console.log("Type: ", type, "\nValues: ", values, valuec)
  }
  )

  const increment = () => {
    count.push(1)
  }
  const descrement = () => {
    count.pop()
  }
</script>

<div class="flex flex-row justify-center gap-4 items-center my-6">
  <button onclick={descrement} class="btn btn-soft w-fit mx-auto my-6 rounded-2xl hover:bg-orange-700 text-center align-middle">
    -
  </button>
  
  <p class="text-center text-3xl align-baseline max-w-2xl text-wrap">{count.join(" + ")} = {total}</p>

  <button onclick={increment} class="btn btn-soft w-fit mx-auto my-6 rounded-2xl hover:bg-orange-700 text-center align-middle">
   +
  </button>
</div>

<h1>Counter from Global State { counter.count }</h1>

{#if total >= 16}
    <HelloSvelte greet="Hello" />
{/if}
