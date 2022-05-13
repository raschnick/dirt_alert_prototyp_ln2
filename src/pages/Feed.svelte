<script>

    import StoryElement from "../components/StoryElement.svelte";
    import Header from "../components/Header.svelte";

    let stories = [
        {
            title: "Aufräumaktion in Spreitenbach",
            awards: [
                "award"
            ]
        },
        {
            title: "Sauberer Strand in Männedorf"
        },
        {
            title: "Schöner Wald in Wald"
        },
        {
            title: "Kein See in Oetwil am See"
        },
    ]

</script>

<Header name="Feed" createType="Story" />

{#each stories as story}
    <StoryElement title={story.title} awards={story.awards} />
{/each}


<style>

</style>