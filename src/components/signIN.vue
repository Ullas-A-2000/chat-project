<script>

export default{
    data(){
        return {
            email:'',
            password:'',
            verifyPass:'',
            message:''
        }
    },
    methods:{
        verify(){
            axios.get("http://localhost:3000/user")
            .then((elements)=>{
                const user = elements.data
                const isPresent = user.filter(ele => ele.Email===this.email)
                this.verifyPass = isPresent[0].Password
            
                if(isPresent.length === 0){
                    console.log("no user")
                    this.message = 'User does not exists'
                }
                else{
                    if(this.password === this.verifyPass)
                    {
                        window.location.href = "./"
                    }
                    else{
                        this.message = "Password entered is wrong"
                        console.log("not matched")
                    }
                    
                }
            })
        }
    }
}


</script>

<template>
<div class="container">
    <div class="innerchild">
        <form @click.prevent="verify">
            <p>{{message}}</p>
            <input type="text" placeholder="email" id="email" v-model="email">
            <input type="password" placeholder="password" id="pass" v-model="password">
            <input type="submit" value="sign in" id="signin">
        </form>
    </div>
</div>
</template>

<style>
p{
    text-align: center;
}
.container{
    width:100vw;
    height:100vh;
    display: grid;
    place-items: center;
}

.innerchild{
    border-radius: 15px;
    width:25vw;
    height: 50vh;
    /* background-color: rgba(240, 248, 255, 0.441); */
}

#email{
    background-color: rgba(255, 255, 255, 0.703);
    border:none;
    border-radius: 15px;
    padding: 20px;
    width:20vw;
    margin: 10px;
}
#pass{
    background-color: rgba(255, 255, 255, 0.703);
    border:none;
    border-radius: 15px;
    padding: 20px;
    width:20vw;
    margin:10px;
}
#signin{
    background-color: rgb(232, 223, 223);
    cursor: pointer;
    border:none;
    border-radius: 15px;
    padding: 20px;
    width:23vw;
    margin:10px;
    transition: 0.3s ease-in-out;
}

#signin:hover{
    background-color:rgb(217, 209, 209);
    transform: scale(1.05);
}
</style>