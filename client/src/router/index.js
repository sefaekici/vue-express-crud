import Vue from "vue";
import VueRouter from "vue-router";
import AddUser from "../components/AddUser.vue";
import UserList from "../components/UserList.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/adduser", component: AddUser },
  { path: "/", component: UserList },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
