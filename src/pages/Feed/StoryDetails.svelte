<script>

    import axios from "axios";

    const BACKEND_URL = 'http://localhost:3001';

    export let params = {};

    let storyId;
    let story = {};

    $: {
        storyId = params.id;
        getStory();
    }

    function getStory() {
        axios.get(BACKEND_URL + '/api/stories/' + storyId)
            .then( (response) => {
                console.log(response);
                story = response.data;
            })
            .catch( (error) => {
                console.log(error);
            })
    }




</script>


<h1>{story.title}</h1>


<style>

</style>