import { createMemoryHistory, createRouter } from "vue-router";

import Users from "@/pages/users/index.vue";
import Posts from "@/pages/posts/index.vue";

const routes = [
  { path: "/users", component: Users, name: "users" },
  { path: "/users/posts", component: Posts, name: "posts" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
