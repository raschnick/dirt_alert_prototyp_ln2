<script>

    import ComponentA from "./ComponentA.svelte";

    let person = {
        name: "",
        age: null
    }

    function submit() {
        alert("foo");
    }

</script>

<main>

    <form>
        <label>Name</label>
        <input bind:value={person.name} type="text">

        <label>Age</label>
        <input bind:value={person.age} type="number">

        <label></label>
        <button on:click={submit}>Submit</button>

        <p>{person.name}</p>
        <p>{person.age}</p>

        <ComponentA message="Foobar" />
        <ComponentA/>
        <ComponentA/>
    </form>

</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>