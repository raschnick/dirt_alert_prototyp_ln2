<script>

    import axios from "axios";

    let user = {
        name: "",
        email: "",
    }

    let messages = null;

    function submitForm() {
        axios.get("https://weng-message-board.herokuapp.com/api/messages")
        .then( response => {
            messages = response.data;
        } )
        console.log(messages);

        alert("User created successfully! Name: " + user.name + ", Email: " + user.email);
    }

</script>


<label for="name-input">Name: </label>
<input type="text" id="name-input" placeholder="Please enter your name" bind:value={user.name} />


<label for="email-input">Email: </label>
<input type="email" id="email-input" placeholder="Please enter your email" bind:value={user.email} />



<button type="submit" class="btn btn-success" on:click={submitForm}>Submit</button>


<style>

</style>