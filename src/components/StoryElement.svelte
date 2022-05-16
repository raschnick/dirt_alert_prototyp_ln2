<script>
    export let title = "No title provided";
    export let awards = [];

    function addAward(event) {
        awards = [...awards, event.target.value]
    }

    let awardTypes = [
        {
            name: "Silver",
            description: "Worship a kind stranger with this fine piece of internet pixels!",
            imagePath: "silver.png"
        },
        {
            name: "Gold",
            description: "Worship a kind stranger with this EXTRA fine piece of internet pixels!",
            imagePath: "gold.png"
        },
        {
            name: "Platinum",
            description: "At this point you're just throwing bucks at strangers!",
            imagePath: "platinum.png"
        },
        {
            name: "Helpful",
            description: "Show your gratitude for a stranger and his help for the planet!",
            imagePath: "helpful.png"
        },
        {
            name: "Wholesome",
            description: "Give this to a fellow cleaner when his effort is extra wholesome!",
            imagePath: "wholesome.png"
        },
    ]

</script>


<div class="story-element">
    <div class="container">
        <div class="row row-cols-5">
            <div class="col">
                <img src="/img/story_placeholder.jpg" class="story-image" alt="image missing"/>
            </div>
            <div class="col-9">
                <p><b>{title}</b></p>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addAwardModal">
                    Add Award
                </button>
                {#each awards as award}
                    <img src="/img/{award}.png" class="award" alt="image missing"/>
                {/each}
            </div>
        </div>
    </div>


    <!-- Add Award Modal -->
    <div class="modal fade" id="addAwardModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Awards</h5>
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
                                    <button on:click={addAward} value={awardType.name}
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

</style>