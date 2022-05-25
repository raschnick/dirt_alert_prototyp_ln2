<script>

    import StoryElement from "../../components/StoryElement.svelte";
    import Header from "../../components/Header.svelte";
    import axios from "axios";

    let stories = [];

    function loadStories() {

        axios.get("http://localhost:3001/api/stories").then((response) => {
            stories = response.data;
        });
    }

    loadStories();

</script>

<Header name="Feed" createType="Story"/>

{#each stories as story}
    <StoryElement id={story._id} title={story.title} awards={story.awards}/>
{/each}


<style>

</style>