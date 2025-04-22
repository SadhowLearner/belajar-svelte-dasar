<script>
    class Box {
        width = $state(0)
        height = $state(0)
        border = $state(0)
        area = $derived(this.width * this.height)
    }

    const box = new Box();
</script>

<div>
    Lebar :<input type="range" min="0" max="500" id="width" bind:value={box.width} class="input" />

    <br>Tinggi :<input type="range" min="0" max="500" id="height" bind:value={box.height} class="input" />
    
    <br>Border :<input type="range" min="0" max="500" id="border" bind:value={box.border} class="input" />
</div>
<h1>Area : {box.area}</h1>
<div style="width: {box.width}px; height: {box.height}px; border-radius: {box.border}px;" class="bg-red-800 my-12"></div>