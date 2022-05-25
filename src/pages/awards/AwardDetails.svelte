<script>

    import axios from "axios";

    export let params = {};

    let awardId;
    let award = {};
    let linkedStories = [];

    $: {
        awardId = params.id;
        loadAwardAndLinkedStories();
    }

    function loadAwardAndLinkedStories() {
        axios.get('http://localhost:3001/api/awards/' + awardId)
            .then((response) => {
                award = response.data;
                // get details for each story based on the result of the award request
                award.stories.forEach(element => {
                    axios.get('http://localhost:3001/api/stories/' + element)
                        .then((response) => {
                            linkedStories = [...linkedStories, response.data]
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }


</script>


<h1>{award.name}</h1>

<h2>Stories linked to this award:</h2>

{#each linkedStories as story}
    <p>{story.title}</p>
{/each}


<style>

</style>