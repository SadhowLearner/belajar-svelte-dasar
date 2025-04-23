<script>
    const { title, content, footer } = $props();
</script>


<div class="flex flex-col mx-auto items-center gap-12 justify-center w-1/2 h-full p-4 bg-gray-700 rounded-lg shadow-md">
    <h1>{title}</h1>
    <article class="text-justify flex flex-col gap-6">{@render content()}</article>
    <h5>{footer}</h5>
</div>