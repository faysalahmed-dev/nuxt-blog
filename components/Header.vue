<template>
  <div>
    <c-box w="100%" p="4">
      <c-flex align="center" justify="space-between" w="100%" h="100%">
        <nuxt-link :to="{ name: 'index' }">
          <Logo style="display: inline-block;" />
        </nuxt-link>
        <div class="munu-container">
          <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
          <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
          <nuxt-link :to="{ name: 'contact' }">Contact</nuxt-link>
          <nuxt-link :to="{ name: 'blog' }">Blog</nuxt-link>
          <nuxt-link :to="{ name: 'signin' }">Sign In</nuxt-link>
          <nuxt-link :to="{ name: 'signup' }">Sign Up</nuxt-link>
        </div>
      </c-flex>
    </c-box>
  </div>
</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'
import Logo from '@/components/Logo'

export default {
  components: { CBox, Logo, CFlex },
}
</script>

<style scoped>
.munu-container a.nuxt-link-exact-active {
  display: inline-block;
  position: relative;
  color: #3caa79;
  transition: all 0.5s ease;
}
.munu-container a.nuxt-link-exact-active::before {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: #3caa79;
  bottom: -6px;
  opacity: 0;
  animation: fade 0.5s ease forwards;
}

@keyframes fade {
  100% {
    opacity: 100;
  }
}
.munu-container a {
  font-size: 14px;
}
.munu-container a:not(:last-child) {
  margin-right: 18px;
}
</style>
