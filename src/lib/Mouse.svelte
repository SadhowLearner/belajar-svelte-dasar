<script>
    const mouse = $state(
        {
            x: 0,
            y: 0,
        }
    )

    const handleMouseMove = (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    }
</script>

<svelte:body onmousemove={handleMouseMove}/>

<h1>X: {mouse.x}, <br>
    Y: {mouse.y}</h1>