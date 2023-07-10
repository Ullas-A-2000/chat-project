<script>
import entertext from './entertext.vue';
import ChatBubble from './chat-bubble.vue';
export default{
    components: { ChatBubble , entertext },
    data(){
        return{
            incr:1,
            msgsarray:[],
            observer:null,
            data:null,
            dataarr:[],
            interobserve:null,
        }
    },
    created(){

    },
    mounted(){
        this.inter();
        this.getmsgs();
        this.demo();
    },
    methods:{
        getmsgs(){
                axios.get("http://localhost:3000/msg/msgs")  
                .then((msgs)=>{this.msgsarray=msgs.data
                })
                .catch((error)=>{console.log(error)})
            },
        inter(){
            
            let url = "http://localhost:3000/msg/msgs?pgno="+this.incr
                            console.log(url)
                            axios.get(url)
                            .then((elements)=>{
                                const msgdata = elements.data
                                this.msgsarray.push(...msgdata)
                            })
                            .catch((errors)=>{
                                console.log(errors)
                            })
                            this.incr++
        },
        demo(){
            setTimeout(()=>{  
                this.interobserve = new IntersectionObserver(entries=>{
                    entries.forEach(entry => {
                        console.log(entry.isIntersecting)
                        if(entry.isIntersecting){
                            this.inter()
                            this.interobserve.unobserve(document.querySelector(".chatbubble:last-child"))
                            this.interobserve.observe(document.querySelector(".chatbubble:last-child"))
                        }                  
                        return;
                    })
                
                }) 
                this.interobserve.observe(document.querySelector(".chatbubble:last-child"))
            },100)

        },

    }
}
</script>
<template>
    <div class="container">
        <div class="chats">
        <div class="chat-grid">\
            <div class="chatbubble" v-for="item in msgsarray"><p class="user">{{item.user}}</p> <br> {{item.message}}</div>
   
            
        </div>
        <div class="demo"></div>
        </div>
    </div>

    </template>
    <style scoped>

.chats{
    height: 82%;
    width:100%;
    overflow-y: scroll;
    margin-bottom: 8%;

}
.chat-grid {
  height:30%;
  display: grid;
  margin-right: 5%;
  grid-template-columns: 1fr;
  justify-items: end; 
  grid-gap: 10px;
  align-items: right;
  bottom: 10%;
  right: 0; 
}

    .container{

        border-radius: 20px;
        padding: 0; 
        margin:0;
        position: absolute;
        background-color: rgba(239, 242, 243, 0.26);
        width: 79vw;
        height: 80vh;
        left:20.5%;
        bottom:2%;
       
    }
    .chats::-webkit-scrollbar {
        width: 10px;
        /* background-color: rgba(255, 255, 255, 0.6); */
        border-radius: 15px;
}

.chats::-webkit-scrollbar-thumb {
  background-color: #716b6bbe; /* Set the background color of the thumb */
  border-radius: 5px; /* Add rounded corners to the thumb */
}



.chatbubble{
    padding: 10px;
    text-align: right;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 10px;  
}

.inter{
    width:50%;
    height:50%;
    background-color: red;
}

</style>