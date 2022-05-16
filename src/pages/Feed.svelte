<script>

    import StoryElement from "../components/StoryElement.svelte";
    import Header from "../components/Header.svelte";

    let stories = [
        {
            title: "Aufräumaktion in Spreitenbach",
            awards: [
                "silver",
                "wholesome"
            ]
        },
        {
            title: "Sauberer Strand in Männedorf",
            awards: [
                "wholesome",
                "helpful"
            ]
        },
        {
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
    <StoryElement title={story.title} awards={story.awards} />
{/each}


<style>

</style>