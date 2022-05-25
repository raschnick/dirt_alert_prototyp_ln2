import Awards from "./pages/Awards.svelte";
import Feed from "./pages/Feed/Feed.svelte";
import Users from "./pages/Users.svelte";
import Form from "./pages/FormDemo.svelte";
import StoryDetails from "./pages/Feed/StoryDetails.svelte";

export default {
    // Feed / Stories
    '/': Feed,
    '/stories/:id': StoryDetails,

    // Awards
    '/awards': Awards,

    // Users
    '/users': Users,

    // Varia
    '/form': Form
}