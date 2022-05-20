<script>

    import Header from "../components/Header.svelte";

    let users = [
        {
            name: "Jack Smith",
            gender: "m",
            email: "jack.smith@email.com"
        },
        {
            name: "Kathrin Kühn",
            gender: "f",
            email: "kathrin.kuehn@email.com"
        },
        {
            name: "Max Mustermann",
            gender: "m",
            email: "max.mustermann@email.com"
        },
        {
            name: "Foo Bar",
            gender: "m",
            email: "foo.bar@email.com"
        },
    ]

</script>


<Header name="Users" createType="User"/>

{#each users as user}
    <div class="user-element">

        <div class="container">
            <div class="row row-cols-5">
                <div class="col">
                    <img src="/img/avatar_placeholder_{user.gender}.jpg" class="user-image" alt="image missing"/>
                </div>
                <div class="col-9">
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Email:</b> {user.email}</p>
                </div>
            </div>
        </div>


    </div>
{/each}


<style>

    .user-element {
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 15px;
        border: solid #999999 1px;
        background: #EEFFEE;
    }

    .user-image {
        width: 100%;
    }

</style>