<script>

    import axios from "axios";

    let awards = [];

    loadAwards();

    function loadAwards() {
        axios.get("http://localhost:3001/api/awards").then((response) => {
            awards = response.data;
        });
    }



</script>

<div id="header">
    <h3 id="title">Awards Overview</h3>
</div>

<div class="container">
    <div class="row row-cols-4">
        {#each awards as award}
            <div class="col">
                <div class="award-element">
                    <p><b>{award.name}</b></p>
                    <div class="award-image">
                        <img src="/img/{award.imagePath}" width="100" height="100" alt="image missing"/>
                    </div>
                    <p>{award.description}</p>
                    <a class="details-link" href={"#/awards/" + award._id}>
                        See Award Details >
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>

    #header {
        overflow: hidden;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #title {
        float: left;
        color: #7CD175;
    }

    .award-element {
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 15px;
        border: solid #999999 1px;
        background: #EEFFEE;
    }

    .award-image {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
    }

    .details-link {
        color: #333333;
        font-weight: bold;
    }

</style>