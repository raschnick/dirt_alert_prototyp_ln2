<script>
    export let name = "No name provided";
    export let createType = "No creation type provided";

    function create() {
        alert("not implemented yet.");
    }
</script>


<div id="header">
    <h3 id="title">{name}</h3>
    <button id="createButton" class="btn btn-success" on:click={create}>Create new {createType}</button>
</div>


<style>
    #header {
        overflow: hidden;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    #title {
        float:left;
    }
    #createButton {
        float: right;
    }
</style>