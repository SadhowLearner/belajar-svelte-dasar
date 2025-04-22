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

<div class="flex flex-row items-center justify-center gap-4 my-6">
  <button onclick={descrement} class="mx-auto my-6 text-center align-middle btn btn-soft w-fit rounded-2xl hover:bg-orange-700">
    -
  </button>
  
  <p class="max-w-2xl text-3xl text-center align-baseline text-wrap {total % 2 === 0 ? 'text-green-600' : 'text-red-600'}">{count.join(" + ")} = {total}</p>

  <button onclick={increment} class="mx-auto my-6 text-center align-middle btn btn-soft w-fit rounded-2xl hover:bg-orange-700">
   +
  </button>
</div>

<h1>Counter from Global State { counter.count }</h1>

{#if total >= 16}
    <HelloSvelte greet="Hello" />
{/if}
