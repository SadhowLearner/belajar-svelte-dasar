<script>
  let { id, name, done } = $props();
  const changeStatus = () => {
    done = !done;
  };

  const emojis = {
    "1": "😁",
    "2": "🗿",
    "3": "😊",
    "4": "💤",
    "5": "❤️‍🔥",
  };

  let emoji = emojis[id] || "🤷‍♂️";
  console.log(emoji);
</script>

{emoji}
{#if done}
  <strike>{id} -- {name}</strike> <!-- content here -->
{:else}
  <!-- else content here -->
  <span>{id} -- {name}</span>
{/if}
<button onclick={changeStatus}>
  {#if done}
    <span>X</span>
  {:else}
    <span>V</span>
  {/if}
</button>
