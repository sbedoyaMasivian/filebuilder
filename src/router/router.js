import Vue from "vue";
import Router from "vue-router";
import FileBuilder from "../views/file_builder/FileBuilder.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "FileBuilder",
      component: FileBuilder
    },
  ]
});
