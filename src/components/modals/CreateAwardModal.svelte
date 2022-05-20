<script>

    let award = {
        name: null,
        description: null,
        image: null,
    }

    function submitStory() {
        // TODO: Save result to mongo db & reload stories in feed
        console.log("Award: " + award)
    }

</script>

<div class="modal fade" id="createAwardModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Create new Award</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Name:</p>
                <input bind:value={award.name} type="text">
                <p>Description:</p>
                <input bind:value={award.description} type="date">
                <p>Image:</p>
                <input bind:value={award.image} type="file">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="">Save changes</button>
            </div>
        </div>
    </div>
</div>

<style>

</style>