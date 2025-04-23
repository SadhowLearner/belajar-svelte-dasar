<script>

const removeElement = () => {
    const header = document.getElementById('judul');
    header.remove();
}
const time = (node, interval) => {
    const text = node.textContent;

    $effect(() => {
        const date = setInterval(() => {
            node.textContent = text + ' ' + new Date().toLocaleTimeString();
        }, interval);
        
        return () => clearInterval(date);
    });
}
</script>

<h1 id="judul" use:time={1000}>Waktu</h1>
<p use:time={5000}>Sekarang Adalah Jam</p>
<button class="btn btn-success my-6" onclick={removeElement}>Hapus Judul</button>