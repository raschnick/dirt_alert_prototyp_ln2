<script>

    import axios from "axios";

    let story = {
        title: null,
        image: null,
    }

    function submitStory() {
        axios.post('http://localhost:3001/api/stories', {
            title: story.title,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // TODO: Save result to mongo db & reload stories in feed
    }

</script>

<div class="modal fade" id="createStoryModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Create new Story</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Title:</p>
                <input bind:value={story.title} type="text">
                <p>Image:</p>
                <input bind:value={story.image} type="file">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-success" on:click={submitStory} data-bs-dismiss="modal">Save
                    changes
                </button>
            </div>
        </div>
    </div>
</div>

<style>

</style>