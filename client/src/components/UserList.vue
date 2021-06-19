<template>
    <div class="user-list">
        <h1>User List</h1>
        <ul>
            <li v-for="user in users" :key="user._id">
               <div class="informations">
                    <span>{{user._id}}</span>
                    <span>{{user.name}}</span>
               </div>
               <div class="update-icons">
                   <i class="fas fa-info" @click="pushDetailPage(user._id)"></i>
                   <i class="fas fa-pencil-alt" @click="pushEditPage(user._id)"></i>
                   <i class="fas fa-trash-alt" @click="deleteUserFromDatabase(user._id)"></i>
               </div>
            </li>
            
        </ul>
    </div>    
</template>


<script>
import axios from "axios";
export default {
    data(){
        return{
            users:[],
        }
    },
    created(){
        axios.get("http://localhost:5000/users")
        .then((data)=>{
            this.users=data.data;
        })
        .catch(err=>console.log(err));
    },
    methods:{
        deleteUserFromDatabase(id){
           
            axios.delete("http://localhost:5000/users/"+id)
            .then(()=>{
                this.deleteUserFromClient(id);
            })
            .catch(err=>console.log(err));
        },
        deleteUserFromClient(id){
            const newUsers=this.users.filter((user)=>{
                   return user._id!=id
                })
            this.users=newUsers;
        },
        pushDetailPage(id){
            this.$router.push({path:"/"+id,params:{id}})
        },
        pushEditPage(id){
            this.$router.push({path:"edit/"+id,params:{id}})
        },
    }
}
</script>



<style lang="scss">

    .user-list{
        width: 90%;
        margin-top: 3rem;
        h1{
            padding: 8px;
            text-align: center;
            border-bottom: 1px solid #293B5F;
            margin-bottom: 2rem;
        }
        ul{
            display: flex;
            flex-direction: column; 
            align-items: center;
            li{
                list-style: none;
                margin-top: 2rem;
                background: #293B5F;
                height: 70px;
                width: 90%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                border-radius: 10px;
                &:last-child{
                    margin-bottom: 2rem;
                }
                .informations{
                    span{
                        border-radius: 5px;
                        &:first-child{
                            background: #29C7AC;
                            color: #fff;
                            margin-left: 1rem;
                        }
                        background: #DBE6FD;
                        color: #293B5F;
                        padding: 10px;
                        margin-right: 1.5rem;
                    }
                }
                .update-icons{
                    i{
                        cursor: pointer;
                        font-size: 20px;
                        color: #DBE6FD;
                        margin-right: 1.5rem;
                        transition: color .5s;
                        &:hover{
                            color:#28DF99;
                            &:last-child{
                                color: #FE346E;
                            }
                            
                        }
                    }
                }
            }
        }
       
        

    }


</style>