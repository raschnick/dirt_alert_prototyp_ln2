<script>

import Header from "../components/Header.svelte";

let awards = [
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


<Header name="Awards" createType="Award" />

<div class="container">
    <div class="row row-cols-4">
        {#each awards as award}
            <div class="col">
                <div class="award-element">
                    <p><b>{award.name}</b></p>
                    <div class="award-image">
                        <img src="/img/{award.imagePath}" width="100" height="100" alt="image missing" />
                    </div>
                    <p>{award.description}</p>
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

</style>