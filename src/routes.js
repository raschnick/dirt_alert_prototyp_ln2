import Awards from "./pages/Awards.svelte";
import Feed from "./pages/Feed.svelte";
import Users from "./pages/Users.svelte";
import Form from "./pages/FormDemo.svelte";

export default {
    '/': Feed,
    '/awards': Awards,
    '/users': Users,
    '/form': Form
}