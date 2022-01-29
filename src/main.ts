import Vue from 'vue'
import App from './App.vue'

import Avatar from './components/avatar/avatar.vue'
Vue.component('avatar', Avatar)

Vue.config.productionTip = false

new App().$mount()
