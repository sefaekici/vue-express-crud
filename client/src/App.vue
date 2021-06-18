<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-user-list></app-user-list>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik",sans-serif;
  }

  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>


<script>
import Navbar from "./components/Navbar.vue"
import UserList from "./components/UserList.vue";
export default {
  components:{
    appNavbar:Navbar,
    appUserList:UserList
  },
}
</script>