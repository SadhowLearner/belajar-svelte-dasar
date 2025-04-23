<script>
    let count = $state(0);
    let interval = $state(1000);

    let intervalId;

    $effect(() => {
      
        // Set up a new interval
        intervalId = setInterval(() => {
            count++;
        }, interval);

        return () => clearInterval(intervalId);
        // Cleanup function to clear the interval when the effect is re-run or destroyed
        
    })

    const incrementInterval = () => {
        interval += 1000;
    }
    const resetInterval = () => {
        interval = 1000;
    }
    const resetCount = () => {
        count = 0;
    }
</script>

<h1>Auto Counter: {count}</h1>

<button class="btn btn-outline btn-warning mt-6" onclick={incrementInterval}>Increment Interval : {interval/1000} s</button>
<button class="btn btn-outline btn-warning mt-6 mx-3" onclick={resetInterval}>Reset Interval</button>
<button class="btn btn-outline btn-warning mt-6" onclick={resetCount}>Reset Count</button>
