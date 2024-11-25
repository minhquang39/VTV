import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

import "./style/style.css";
import "./style/main.css";

createApp(App).use(router).mount("#app");
