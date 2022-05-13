<script>

	var counter = 0;

	function count() {
		counter++;
	}

	function reset() {
		counter = 0;
	}

	let input = "";
	let movies = [
		"Star Wars IV",
		"Star Wars V",
		"Star Wars VI",
	]

	function update() {
		movies = [...movies, input]
	}

</script>

<main>
	<p>Counter: {counter}</p>
	{#if counter%2===0}
		<p>Die Zahl ist gerade</p>
	{:else}
		<p>Die Zahl ist ungerade</p>
	{/if}

	<button on:click={count}>Count</button>
	<button on:click={reset}>Reset</button>

	<p>Value Bindings:</p>
	<input bind:value={input} type="text">
	<button on:click={update}>Update</button>

		{#each movies as movie}
			<li>{movie}</li>
		{/each}
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