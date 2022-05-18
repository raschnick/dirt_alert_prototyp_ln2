<script>

    import StoryElement from "../components/StoryElement.svelte";
    import Header from "../components/Header.svelte";

    let stories = [
        {
            id: 1,
            title: "Aufräumaktion in Spreitenbach",
            awards: [
                "silver",
                "wholesome"
            ]
        },
        {
            id: 2,
            title: "Sauberer Strand in Männedorf",
            awards: [
                "wholesome",
                "helpful"
            ]
        },
        {
            id: 3,
            title: "Schöner Wald in Wald",
            awards: [
                "gold",
                "platinum"
            ]
        },
    ]

</script>

<Header name="Feed" createType="Story" />

{#each stories as story}
    <StoryElement id={story.id} title={story.title} awards={story.awards} />
{/each}


<style>

</style>