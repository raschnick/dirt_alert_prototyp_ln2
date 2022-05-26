import Awards from "./pages/awards/Awards.svelte";
import Feed from "./pages/feed/Feed.svelte";
import Users from "./pages/users/Users.svelte";
import Form from "./pages/FormDemo.svelte";
import StoryDetails from "./pages/feed/StoryDetails.svelte";
import AwardDetails from "./pages/awards/AwardDetails.svelte";

export default {
    // Feed / Stories
    '/': Feed,
    '/stories/:id': StoryDetails,

    // Awards
    '/awards': Awards,
    '/awards/:id': AwardDetails,

    // Users
    '/users': Users,

    // Varia
    '/form': Form
}