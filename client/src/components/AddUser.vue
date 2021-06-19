<template>
    <div class="add-user">
        <input v-model="name" required type="text" placeholder="FirstName LastName">
        <input v-model="email" required type="email" placeholder="Email">
        <input v-model="job" required type="text" placeholder="Job">
        <button @click="saveUserToDb()">Save</button>
    </div>
</template>



<script>
import axios from "axios";
export default {
    data(){
        return{
            name:"",
            email:"",
            job:""
        }
    },
    methods:{
        deleteAllVariables(){
            this.name="";
            this.email="";
            this.job="";
        },
        saveUserToDb(){
            let user={
                name:this.name,
                email:this.email,
                job:this.job,
            }
            axios.post("http://localhost:5000/users",user)
            .then(()=>
                {
                    //Alert Gelicek
                    this.deleteAllVariables()
                }
            )
            .catch(err=>console.log(err));
        }
    }
}
</script>




<style lang="scss">
    .add-user{
        width: 500px;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        input{
            width: 300px;
            height: 50px;
            padding: 0 20px;
            margin-bottom: 1rem;
            border-radius: 10px;
            outline: none;
            font-size: 18px;
            border: 2px solid  #DBE6FD;
            transition: border .8s;
            &:focus{
                border-color: #293B5F;
            }
        }
        button{
            width: 150px;
            height: 50px;
            font-size: 15px;
            border: none;
            cursor: pointer;
            background: #293B5F;
            color: #fff;
            border-radius: 5px;
            transition:background .5s ,color .5s;
            &:hover{
                background: #DBE6FD;
                color: #293B5F;
            }
        }
    }
</style>