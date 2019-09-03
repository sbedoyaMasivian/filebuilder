import Vue from "vue";
import moment from "moment";
import _ from "lodash";
import Is from "is_js";
import BootstrapVue from "bootstrap-vue";
import VueCodemirror from 'vue-codemirror'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./assets/scsss/custom.scss";
import 'codemirror/lib/codemirror.css'

library.add(faFilePdf);
library.add(faFileExcel);
library.add(faInfoCircle);
library.add(faEye);
library.add(faTrashAlt);

Vue.config.productionTip = false;
Vue.set(Vue.prototype, "moment", moment);
Vue.set(Vue.prototype, "_", _);
Vue.set(Vue.prototype, "is", Is);
Vue.use(BootstrapVue);
Vue.use(VueCodemirror);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h =>
   h(App)
}).$mount("#app");
