<script>
    import { getContext } from 'svelte';

    const counter = getContext('counter');
    const increment = () => {
        counter.count++;
    }
    const descrement = () => {
        counter.count--;
    }
</script>

<button class="btn btn-primary" onclick={increment}>Tambah : {counter.count}</button>
<button class="btn btn-error" onclick={descrement}>Kurang : {counter.count}</button>
