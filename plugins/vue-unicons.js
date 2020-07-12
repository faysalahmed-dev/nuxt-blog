import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-ssr.common.js'
import {
  uniGithub,
  uniFacebookF,
  uniTwitter,
  uniGlobe,
  uniArrowRight,
  uniEye,
  uniComment,
} from 'vue-unicons/src/icons'
import 'vue-unicons/dist/vue-unicons-ssr.css'
Unicon.add([
  uniGithub,
  uniFacebookF,
  uniEye,
  uniComment,
  uniTwitter,
  uniGlobe,
  uniArrowRight,
])
Vue.use(Unicon)
