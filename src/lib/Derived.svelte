<script>
  let count = $state(0);
  let mult = $state(1);
  const result = $derived(count * mult);
  const increment = () => {
    count += 1;
  };
  const descrement = () => {
    count -= 1;
  };
</script>

<div class="flex flex-row gap-8 justify-center items-center my-6">
  <button
    onclick={descrement}
    class="btn btn-soft w-fit mx-auto my-6 rounded-2xl hover:bg-orange-700 text-center align-middle"
  >
    -
  </button>
  <p class="text-center text-2xl align-baseline mx-2"><b>{result}</b>
  Is the result of {count} multiplied with {mult}</p>
  <button
    onclick={increment}
    class="btn btn-soft w-fit mx-auto my-6 rounded-2xl hover:bg-orange-700 text-center align-middle"
  >
    +
  </button>
</div>
<label for="mult" class="text-xl">Give the number of multiple</label>
<input id="mult" type="number" bind:value={mult} class="w-20 text-center text-2xl text-bold"  />
