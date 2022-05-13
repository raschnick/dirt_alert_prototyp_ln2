<script>
    import Router from "svelte-spa-router"
    import routes from "./routes"
    import Navigation from "./components/Navigation.svelte";
</script>



<div id="app">

    <div class="container">
        <h1>Dirt Alert</h1>
        <Navigation/>
        <Router {routes}/>
    </div>

</div>