<script>


export default{
    data() {
        return {
            msg: "",
            currentUser: "ullas",
            withUser: "sumaiya"
        };
    },
    methods: {
        postmsg() {
            axios.post("http://localhost:3000/msg", { message: this.msg, user: this.currentUser })
                .then(() => {
                console.log("message sent");
                this.msg = "";
            })
                .catch((error) => { console.log("error occured ", error); });
        }
    },

}


</script>



<template>

<div class="enter">

    <form @submit="postmsg">
        <input type="text" id="entertext" v-model="msg">
        <input type="submit" value="➤" id="sub">

    </form>
    <chatBubble text="im ullas"/>
    
</div>

</template>



<style>
#sub{
    cursor: pointer;
    border: none;
    width:3.5%;
    height: 8%;
    border-radius: 50%;
    position: absolute;
    bottom:6%;
    left:86%;
    transition: 0.3s ease-in-out;
}
#sub:hover{
    background-color: rgb(223, 210, 210);
    transform: scale(1.05);
}
#entertext{
    background-color: rgba(255, 255, 255, 0.372);
    border:none;
    text-align: center;
    position: absolute;
    width:60vw;
    height:10vh;
    border-radius: 30px;
    bottom:5%;
    left:30%;
}
</style>