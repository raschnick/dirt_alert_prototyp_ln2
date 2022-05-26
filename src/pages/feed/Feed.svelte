<script>

    import StoryElement from "../../components/StoryElement.svelte";
    import Header from "../../components/Header.svelte";
    import axios from "axios";
    import CreateStoryModal from "../../components/modals/CreateStoryModal.svelte";

    let stories = [];

    function loadStories() {

        axios.get("http://localhost:3001/api/stories").then((response) => {
            stories = response.data;
        });
    }

    loadStories();

</script>


<div id="header">
    <h3 id="title">Story Feed</h3>
    <button class="createButton btn btn-success" data-bs-toggle="modal" data-bs-target="#createStoryModal">Create
        new Story
    </button>
</div>

{#each stories as story}
    <StoryElement id={story._id} title={story.title} awards={story.awards}/>
{/each}

<CreateStoryModal/>


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