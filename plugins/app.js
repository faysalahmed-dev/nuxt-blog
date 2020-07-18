import Vue from 'vue'
import format from 'date-fns/format'
import vuelidate from 'vuelidate'

Vue.use(vuelidate)

Vue.filter('truncated', (value, maxLength) => {
  if (!value) return ''

  return value.length > maxLength ? value.substr(0, maxLength) + '...' : value
})

Vue.filter('timeFormat', (value) => {
  if (!value) return ''
  return format(new Date(value), 'PP')
})
