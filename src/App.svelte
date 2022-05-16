<script>
    import Router from "svelte-spa-router"
    import routes from "./routes"
    import Navigation from "./components/Navigation.svelte";
</script>



<div id="app">

    <div class="container">
        <div id="title-container" >
            <h1 id="title">Dirt Alert</h1>
            <img src="/img/logo.png" id="logo" alt="logo not found" />
        </div>
        <Navigation/>
        <Router {routes}/>
    </div>

</div>


<style>

    h1 {
        color: #7CD175;
    }

    #title-container {
        overflow: hidden;
    }

    #title {
        float: left;
    }

    #logo {
        width: 60px;
        float: right;
    }

</style>