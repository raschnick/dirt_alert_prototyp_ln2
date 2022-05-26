<script>

    import axios from "axios";

    let users = [];

    loadUsers();

    function loadUsers() {
        axios.get("http://localhost:3001/api/users").then((response) => {
            users = response.data;
        });
    }

</script>

<div id="header">
    <h3 id="title">User Overview</h3>
</div>

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

    #header {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #title {
        color: #7CD175;
    }

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