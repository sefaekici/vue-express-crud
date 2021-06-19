<template>
    <div class="navbar">
        <h4>User App</h4>

        <ul>
            <li><router-link active-class="green" exact to="/adduser">Add User</router-link></li>
            <li><router-link active-class="green" exact to="/">User List</router-link></li>
        </ul>

    </div>
</template>



<style lang="scss">
    .navbar{
        width: 100%;
        height: 85px;
        background: #293B5F;
        margin-top: 0;
        padding: 15px 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:#fff;

        @media screen and (max-width:650px) {
            flex-direction: column;
            height: 95px;
            h4{
                margin-bottom: 15px;
            }

        }

        h4{
            font-size: 25px;
        }
        ul{
            display: flex;
            li{
                list-style: none;
                &:first-child{
                    margin-right: 30px;
                }
                a{
                    text-decoration: none;
                    color: black;
                    font-size: 20px;
                    color:#fff;
                    transition: color .6s;
                    &:hover{
                       color:#28DF99;
                       opacity: 0.6;
                    }
                }

                .green{
                    color:#28DF99
                }
            }
        }
    }
</style>