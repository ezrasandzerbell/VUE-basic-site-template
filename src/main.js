// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
