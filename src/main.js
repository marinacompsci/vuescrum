import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.config.productionTip = false


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// State Management
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    backlogItems: []
  },
  mutations: {
    addBacklogItem(state, data) {
      state.backlogItems.push(data);
    }
  }
});


new Vue({
  render: h => h(App),
  store
}).$mount('#app');
