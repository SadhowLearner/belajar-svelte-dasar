<script>
    import { counter } from "../state/counter.js";

    const increament = () => {
        $counter++;
    }
    const descreament = () => {
        $counter--;
    }
</script>

<button class="btn btn-error" onclick={increament}>Tambah : {$counter}</button>
<button class="btn btn-error" onclick={descreament}>Kurang : {$counter}</button>