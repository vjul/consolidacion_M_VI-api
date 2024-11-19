import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import OpinionesView from "@/views/OpinionesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SidebarView from "@/views/SidebarView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin/:gameName",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/opiniones/:id",
    name: "opiniones",
    component: OpinionesView,
  },
  {
    path: "/sidebar",
    name: "sidebar",
    props: true,
    component: SidebarView,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
