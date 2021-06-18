<template>
  <div id="app">
    <app-navbar></app-navbar>
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
export default {
  components:{
    appNavbar:Navbar,
  },
}
</script>