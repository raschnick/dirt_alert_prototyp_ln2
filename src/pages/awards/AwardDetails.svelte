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

    function openStoryDetails(event) {
        console.log("event.target: " + event.target);
        let storyId = event.target.value;
        console.log("storyId: " + storyId);
        //window.open("#/stories/" + storyId);
    }


</script>


<div class="container">
    <div class="row">
        <div class="col-6">
            <h3>{award.name}</h3>
            <p><b>Description: </b></p>
            <p>{award.description}</p>
            <p><b>Stories: </b></p>
            {#if linkedStories.length < 1 }
                <p>No Stories linked to this award yet.</p>
            {:else}
                <ul>
                    {#each linkedStories as story}
                        <li><a href={"#/stories/" + story._id} class="story-link">{story.title}</a></li>
                    {/each}
                </ul>
            {/if}
        </div>
        <div class="col-6 col-centered">
            <p></p>
            <img src="/img/{award.imagePath}" id="award-image" alt="image missing"/>
        </div>
    </div>
</div>


<style>
    h3 {
        color: #7CD175;
    }

    #award-image {
        max-width: 25%;
    }

    .story-link {
        color: black;
    }
</style>