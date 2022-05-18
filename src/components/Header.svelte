<script>

    import CreateUserModal from "./modals/CreateUserModal.svelte";
    import CreateStoryModal from "./modals/CreateStoryModal.svelte";
    import CreateAwardModal from "./modals/CreateAwardModal.svelte";

    export let name = "No name provided";
    export let createType = "No creation type provided";

</script>


<div id="header">
    <h3 id="title">{name}</h3>

    {#if createType === "Story"}
        <button class="createButton btn btn-success" data-bs-toggle="modal" data-bs-target="#createStoryModal">Create new {createType}</button>
    {:else if createType === "Award"}
        <button class="createButton btn btn-success" data-bs-toggle="modal" data-bs-target="#createAwardModal">Create
            new {createType}</button>
    {:else if createType === "User"}
        <button class="createButton btn btn-success" data-bs-toggle="modal" data-bs-target="#createUserModal">Create
            new {createType}</button>
    {/if}

</div>

<CreateStoryModal />
<CreateAwardModal />
<CreateUserModal />

<style>

    #header {
        overflow: hidden;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #title {
        float: left;
        color: #7CD175;
    }

    .createButton {
        float: right;
    }

</style>