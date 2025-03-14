import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createApp(App).use(router).use(store).mount("#app");
