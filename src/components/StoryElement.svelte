<script>
    export let title = "No title provided";
    export let awards = [];

    function addAward() {
        awards = [...awards, "award"]
    }
</script>


<div class="story">
    <p>{title}</p>
    <button class="btn btn-success" on:click={addAward}>Add Award</button>
    {#each awards as award}
        <img src="/img/award.png" width="30" height="30" alt="image missing" />
    {/each}
</div>


<style>

    .story {
        margin-top: 15px;
        padding: 15px;
        border-radius: 15px;
        border: solid #999999 1px;
    }

</style>