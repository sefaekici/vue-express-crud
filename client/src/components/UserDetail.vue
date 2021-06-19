<template>
    <div class="user-detail">
        <h1>NAME: {{currentUser.name}}</h1>
        <h2>EMAİL: {{currentUser.email}}</h2> 
        <h3>JOB: {{currentUser.job}}</h3>
        <p>ID:{{currentUser._id}}</p>
        <router-link to="/">Go Back To UserList</router-link>
    </div>  
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            currentUser:{}
        }
    },
     created(){
        axios.get("http://localhost:5000/users/"+this.$route.params.id)
        .then(data=>{
            console.log(data)
            this.currentUser=data.data;
        })
    }
}
</script>

<style lang="scss">
    .user-detail{
        width: 500px;
        height: 350px;
        background: #07689F;
        padding: 0 2rem;
        margin-top: 3rem;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color:#FFC93C;
        h1{
            margin-top: 1rem;
        }
        h2{
            margin-top:1rem;
        }
        h3{
            margin-top: 1rem;
        }
        p{
            margin-top: 1.5rem;
            color: #28DF99;
            font-size: 20px;
        }
        a{
            margin-top: 1rem;
            color: #FFF591;
            &:hover{
                color:cornsilk;
            }
        }
    }
</style>