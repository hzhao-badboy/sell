// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';

Vue.use(VueRouter);

Vue.config.productionTip = false;

var routs = [
  {path: '/goods', component: goods}
];

var router = new VueRouter({
  routs
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

