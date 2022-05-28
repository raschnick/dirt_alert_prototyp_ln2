<script>

    import {tick} from "svelte";
    import {ConfettiExplosion} from "svelte-confetti-explosion";
    import axios from "axios";

    export let title = "No title provided";
    export let awards = [];
    export let id = undefined;

    let awardTypes = [];
    let awardDetails = [];
    let isVisible = false;
    let awardStories = [];

    loadAwardTypes();
    awards.forEach(getAwardDetails)


    async function addAward(event) {
        let awardId = event.target.value;
        awards = [...awards, awardId]

        // update award keys in the story object
        axios.put('http://localhost:3001/api/stories/' + id, {
            awards: awards,
        })
            .catch(function (error) {
                console.log(error);
            });


        // get current stories linked to the award
        axios.get('http://localhost:3001/api/awards/' + awardId)
            .then((response) => {
                awardStories = response.data.stories;
            })
            .catch((error) => {
                console.log(error);
            })

        awardStories = [...awardStories, id];

        // update story keys in the award objects
        axios.put('http://localhost:3001/api/awards/' + awardId, {
            stories: awardStories,
        })
            .catch(function (error) {
                console.log(error);
            });

        // confetti explosion
        isVisible = false;
        await tick();
        isVisible = true;

        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    function getAwardDetails(item) {
        axios.get("http://localhost:3001/api/awards/" + item).then((response) => {
            awardDetails = [...awardDetails, response.data]
        });
    }

    function loadAwardTypes() {
        axios.get("http://localhost:3001/api/awards").then((response) => {
            awardTypes = response.data;
        });
    }

</script>


<div class="story-element">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <img src="/img/story_placeholder.jpg" class="story-image" alt="image missing"/>
            </div>
            <div class="col-6">
                {#if isVisible}
                    <ConfettiExplosion particleCount={100} force={0.5} stageHeight={800} stageWidth={800}
                                       particlesShape="rectangles" duration={3000} colors={['#7CD175']}/>
                {/if}
                <p><b>{title}</b></p>
                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#addAwardModal{id}">
                    Add Award
                </button>
                {#each awardDetails as award}
                    <img src="/img/{award.imagePath}" class="award" alt="image missing"/>
                {/each}
                <p class="mt-5">
                    <a class="details-link" href={"#/stories/" + id}>
                        See Story Details >
                    </a>
                </p>
            </div>
        </div>
    </div>


    <!-- Add Award Modal -->
    <div class="modal fade" id="addAwardModal{id}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Choose an Award for "{title}"</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {#each awardTypes as awardType}
                        <div>
                            <div class="row row-cols-3">
                                <div class="col-3 centered-col">
                                    <img src="/img/{awardType.imagePath}" class="award-preview-icon"
                                         alt="image missing"/>
                                </div>
                                <div class="col-6">
                                    <b>{awardType.name}</b>
                                    <p>{awardType.description}</p>
                                </div>
                                <div class="col-3 centered-col">
                                    <button on:click={addAward} value={awardType._id}
                                            class="btn btn-success btn-select" data-bs-dismiss="modal">Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>


<style>

    .story-element {
        margin-top: 15px;
        padding: 15px;
        border-radius: 15px;
        border: solid #999999 1px;
        background: #EEFFEE;
    }

    .story-image {
        border: solid #999999 1px;
        width: 100%;
        border-radius: 5px;
    }

    .award {
        margin-left: 10px;
        width: 30px;
        height: 30px;
    }

    .award-preview-icon {
        margin-bottom: 20px;
        margin-right: 20px;
        width: 100%;
    }

    .centered-col {
        display: flex;
        justify-content: center;
    }

    .btn-select {
        margin: auto;
    }

    .details-link {
        color: #333333;
        font-weight: bold;
    }

</style>