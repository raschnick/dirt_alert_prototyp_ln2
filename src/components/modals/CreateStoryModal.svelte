<script>

    import axios from "axios";
    import Select from 'svelte-select';

    let story = {
        title: null,
        user: null,
        image: null
    }

    let users = [];

    let selected;

    const optionIdentifier = '_id';
    const labelIdentifier = 'name';

    loadUsers();

    function loadUsers() {
        axios.get("http://localhost:3001/api/users").then((response) => {
            users = response.data;
        });
    }

    function submitStory() {
        axios.post('http://localhost:3001/api/stories', {
            title: story.title,
            user: story.user
        })
            .catch(function (error) {
                console.log(error);
            });
        location.reload();
    }

    function handleSelect(event) {
        story.user = event.detail._id;
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
                <p><b>Title:</b></p>
                <input bind:value={story.title} type="text">
                <p><b>User:</b></p>
                <Select {optionIdentifier} {labelIdentifier} items={users} on:select={handleSelect}/>
                <p><b>Image:</b></p>
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