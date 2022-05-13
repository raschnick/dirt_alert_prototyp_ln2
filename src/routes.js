import Awards from "./pages/Awards.svelte";
import Feed from "./pages/Feed.svelte";
import Users from "./pages/Users.svelte";

export default {
    '/': Feed,
    '/awards': Awards,
    '/users': Users,
}