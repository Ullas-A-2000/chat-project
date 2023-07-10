<script>
    export default{
        data(){
            return{
                msgsarray:[],

            }
        },

        mounted(){
            this.con()
            this.getmsgs()
        },
        methods:{
            getmsgs(){
                axios.get("http://localhost:3000/msg/msgs")  
                .then((msgs)=>{this.msgsarray=msgs.data})
                .catch((error)=>{console.log(error)})
            },
            con(){
                this.msgsarray.concat(this.da)
            }

        }
    
    }
</script>

<template>
    <div class="chat-bubble" v-for="item in msgsarray"><p class="user">{{item.user}}</p> <br> {{item.message}} {{da}}</div>
    <!-- <div class="chat-bubble" v-for="item in da"><p class="user">{{item.user}}</p> <br> {{item.message}} {{da}}</div> -->
</template>

<style>
.user{
    text-align: right;
    border-bottom:2px solid rgb(0, 0, 0);
}
.chat-bubble{
    padding: 10px;
    text-align: right;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 10px;
}
</style>

