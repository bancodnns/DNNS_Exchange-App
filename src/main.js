import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const messages = {
	ch: require("./common/language/ch"),
	en: require("./common/language/en")
};
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
