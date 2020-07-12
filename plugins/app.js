import Vue from 'vue'

Vue.filter('truncated', (value, maxLength) => {
  if (!value) return ''

  return value.length > maxLength ? value.substr(0, maxLength) + '...' : value
})
