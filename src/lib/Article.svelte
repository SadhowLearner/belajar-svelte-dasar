<script>
    async function getArticles() {
        let response = await fetch("./article.json");
        return await response.json();
    }
</script>
{#await getArticles()}
    <h1>Loading...</h1>
{:then article}
    <h1>{article.title}</h1>
    <p>{article.content}</p>
{:catch err}
    <p>Error: {err.message}</p>
{/await}