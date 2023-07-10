<script>
export default{
    data(){
        return {
            uname:null,
            em:null,
            phno:null,
            bio:null,
            dataarray:[]
        }
    },
    mounted(){
        this.loaddetails()
    },
    methods:{
        loaddetails(){
            axios.get("http://localhost:3000/user")
            .then((element)=>{
                const c = element.data
                c.forEach(e => {
                    if(e.Name === "ullas"){
                        this.uname = e.Name
                        this.em = e.Email
                        this.phno = e.Phno
                        this.bio = e.bio
                    }
                
                })
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
}
</script>


<template>
<div class="sidebar">
    <div class="pic"></div>
<div class="userinfo">
    <p class="bio">
        {{uname}} <br>
        {{em}} <br>
        {{phno}} <br>
        {{bio }} <br>
    </p>
</div>
</div>
    </template>
    <style>
    .sidebar{
        display: grid;
        place-items: center;
        position: absolute;
        bottom:2%;
        background-color: rgba(165, 183, 187, 0.26);
        width: 20vw;
        height:80vh;
        border-radius: 20px;
    }
.userinfo{
    border-radius: 15px;
    width:90%;
    height:60%;
    background-color: rgba(255, 255, 255, 0.365);
}
.pic{
    background-image:url('../assets/user.jpg') ;
    background-repeat: no-repeat;
    background-size:cover;
    border: 2px solid white;
    mix-blend-mode: multiply;
    margin-top: 20px;
    align-self: flex-start;
    position: absolute;
    width:50%;
    height:25%;
    border-radius: 50%;
    background-color: rgba(0, 0, 255, 0.443);
}
.bio{
    height: 80%;
    padding-top: 50px;
    font-size: 1.3rem;
}
</style>