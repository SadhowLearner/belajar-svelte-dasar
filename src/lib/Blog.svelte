<script>
  import footer from "daisyui/components/footer";
  import BlogLayout from "./BlogLayout.svelte";
  import { onMount } from "svelte";

  let blog = $state({
    title: "",
    footer: "",
    content: "",
  });

  onMount(async () => {
    const response = await fetch("/blog.json");
    blog = await response.json();
  })
</script>

<BlogLayout title={blog.title} footer={blog.footer}>
  {#snippet content()}
    {@html blog.content}
  {/snippet}
</BlogLayout>
