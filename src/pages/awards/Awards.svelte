<script>

    import Header from "../../components/Header.svelte";
    import axios from "axios";

    let awards = [];

    loadAwards();

    function loadAwards() {
        axios.get("http://localhost:3001/api/awards").then((response) => {
            awards = response.data;
        });
    }



</script>


<Header name="Awards" createType="Award"/>

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
                    <a class="btn btn-secondary details-link" href={"#/awards/" + award._id}>
                        See Award Details
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>

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
        color: white;
    }

</style>