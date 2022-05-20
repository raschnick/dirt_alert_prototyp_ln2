<script>

    import StoryElement from "../components/StoryElement.svelte";
    import Header from "../components/Header.svelte";
    import axios from "axios";

    const BACKEND_URL = 'http://localhost:3001';

    let stories = [];

    loadStories();

    let stories_example = [
        {
            _id: "asdf123",
            title: "Aufräumaktion in Spreitenbach",
            image: null,
            awards: [
                "silver",
                "wholesome"
            ]
        },
        {
            _id: "dadwd",
            title: "Sauberer Strand in Männedorf",
            awards: [
                "wholesome",
                "helpful"
            ]
        },
        {
            _id: "1aw3",
            title: "Schöner Wald in Wald",
            awards: [
                "gold",
                "platinum"
            ]
        },
    ]

    function loadStories() {
        axios.get(BACKEND_URL + '/api/stories')
            .then( (response) => {
                console.log(response);
                stories = response.data;
            })
            .catch( (error) => {
                console.log(error);
            })
    }




</script>

<Header name="Feed" createType="Story"/>

{#each stories as story}
    <StoryElement id={story._id} title={story.title} awards={story.awards}/>
{/each}


<style>

</style>