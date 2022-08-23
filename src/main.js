import Vue from 'vue'
import App from './App.vue'
//三級連動組件--全局
import TypeNav from '@/pages/Home/TypeNav'
//第一個參數：全局組件的名字 第二參數：哪一個組件
Vue.component(TypeNav.name,TypeNav)

//測試
import {reCategoryList} from '@/api';
console.log(reCategoryList())
reCategoryList();

//引入路由
import router from '@/router';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //註冊路由
  router
}).$mount('#app')
