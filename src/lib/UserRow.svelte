<script>
    const { id, name, address } = $props();
</script>

<tr>
    <td class="border border-gray-300 max-w-[5rem]">{id}</td>
    <td class="border border-gray-300 p-4 my-2">{name}</td>
    <td class="border border-gray-300">{address}</td>
</tr>