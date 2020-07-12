import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import {
  uniGithub,
  uniFacebookF,
  uniTwitter,
  uniGlobe,
} from 'vue-unicons/src/icons'
import 'vue-unicons/dist/vue-unicons-ssr.css'
Unicon.add([uniGithub, uniFacebookF, uniTwitter, uniGlobe])
Vue.use(Unicon)
