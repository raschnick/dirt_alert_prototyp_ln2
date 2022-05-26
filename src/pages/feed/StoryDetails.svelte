<script>

    import axios from "axios";

    const BACKEND_URL = '';

    export let params = {};

    let storyId;
    let user = {name: undefined};
    let story = {};
    let awardDetails = [];


    storyId = params.id;
    getStory();


    function getStory() {
        axios.get('http://localhost:3001/api/stories/' + storyId)
            .then((response) => {
                story = response.data;
                getUserDetails();
                getAwardDetails();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function getUserDetails() {
        axios.get('http://localhost:3001/api/users/' + story.user)
            .then((response) => {
                user = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function getAwardDetails() {
        story.awards.forEach(element => {
            axios.get('http://localhost:3001/api/awards/' + element)
                .then((response) => {
                    awardDetails = [...awardDetails, response.data]
                })
                .catch((error) => {
                    console.log(error);
                })
        });
    }


</script>


<div class="container">
    <div class="row">
        <div class="col-6">
            <h1>{story.title}</h1>
            <p><b>Date: </b>{story.date}</p>
            <p><b>User: </b>{user.name}</p>
            <p><b>Awards: </b></p>
            {#each awardDetails as award}
                <img src="/img/{award.imagePath}" class="award"/>
            {/each}
        </div>
        <div class="col-6">
            <p></p>
            <img src="/img/story_placeholder.jpg" id="story-image" alt="image missing"/>
        </div>
    </div>
</div>


<style>
    .award {
        margin-left: 10px;
        width: 30px;
        height: 30px;
    }

    #story-image {
        max-width: 100%;
    }
</style>