// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import scroll from 'vuescroll/dist/vuescroll-native';
import Element from 'element-ui'
import VideoPlayer from 'vue-video-player'

import 'vuescroll/dist/vuescroll.css';
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

import "./assets/style/global.scss"
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(scroll);
Vue.use(VideoPlayer);
Vue.use(Element);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch: {
    $route(to,from){
      let title = to.name;
      if(title == ''){
        title = "首页"
      }
      document.title = `${title}-品牌云`
    }
  }
})

