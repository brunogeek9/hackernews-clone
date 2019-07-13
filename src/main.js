import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLogger from 'vuejs-logger';

Vue.config.productionTip = false

const options = {
  isEnabled: true,
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
