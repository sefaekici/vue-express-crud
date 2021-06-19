<template>
    <div class="add-user">
        <h4>User Edit</h4>
        <input v-model="currentUser.name"  required type="text" placeholder="FirstName LastName">
        <input v-model="currentUser.email" required type="email" placeholder="Email">
        <input v-model="currentUser.job" required type="text" placeholder="Job">
        <button @click="updateUser()">Save</button>
    </div>
</template>


<script>
import axios from "axios"
export default {
    data(){
        return{
             currentUser:{
                 name:"",
                 email:"",
                 job:""
             }
        }
       
    },
    methods:{
        updateUser(){
            
            axios.put("http://localhost:5000/users/"+this.$route.params.id,{
                ...this.currentUser
            })
            .then(()=>this.$router.push({path:"/"}))
            .catch(err=>console.log(err))
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
    .add-user{
        h4{
            font-size: 25px;
            margin-bottom:1rem;
        }
    }
</style>