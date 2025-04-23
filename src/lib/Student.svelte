<script>
    import { SvelteMap } from "svelte/reactivity";

    const students = new SvelteMap();

    let student = $state("")
    let value = $state(0);

    const addStudents = () => {
        students.set(student, value);
        student = "";
        value = 0;
    }
</script>

<div class="flex flex-col gap-4">
    <div class="flex gap-4">
        <input type="text" bind:value={student} placeholder="Student Name" class="input" />
        <input type="number" bind:value={value} placeholder="Student Value" class="input" />
        <button onclick={addStudents} class="btn">Add</button>
    </div>
    <ul class="list  pl-6">
        {#each students as student (student[0])}
            <li class="flex flex-row items-center text-xl text-bold my-6">
                <p class="text-center grow-1">{student[0]} : {student[1]}</p>
                <button class="btn btn-error" onclick={() => students.delete(student[0])}>Delete</button>
            </li>
        {/each}
    </ul>
</div>
