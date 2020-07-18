<template>
  <c-box w="100%" p="4" pos="sticky" top="0" bg="#fff">
    <c-flex align="center" justify="space-between" w="100%" h="100%">
      <nuxt-link :to="{ name: 'index' }">
        <Logo style="display: inline-block;" />
      </nuxt-link>
      <c-flex align="center" class="munu-container">
        <c-link as="nuxt-link" :to="{ name: 'index' }">Home</c-link>
        <c-link as="nuxt-link" :to="{ name: 'about' }">About</c-link>
        <c-link as="nuxt-link" :to="{ name: 'contact' }">Contact</c-link>
        <c-link as="nuxt-link" :to="{ name: 'blog' }">Blog</c-link>
        <HeaderDropDown
          v-if="isLogin"
          @handleLogout="logoutUser"
          :userName="currentUser.name"
        />
        <div v-else style="display: inline-block;">
          <c-link as="nuxt-link" :to="{ name: 'signin' }">
            Sign In
          </c-link>
          <c-link as="nuxt-link" :to="{ name: 'signup' }">Sign Up</c-link>
        </div>
      </c-flex>
    </c-flex>
  </c-box>
</template>

<script>
import { CBox, CFlex, CButton, CStack, CLink } from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
import Logo from '@/components/Logo'
export default {
  computed: { ...mapGetters(['isLogin', 'currentUser']) },
  name: 'AppHeader',
  components: { CBox, Logo, CFlex, CButton, CStack, CLink },
  methods: {
    async logoutUser() {
      try {
        await this.$fireAuth.signOut()
        this.$router.replace('/blog')
      } catch (err) {
        // error handler later
        console.log(err)
      }
    },
  },
}
</script>

<style scoped>
.munu-container a.nuxt-link-exact-active {
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
  display: inline-block;
  font-size: 14px;
}
.munu-container a:hover {
  text-decoration: none;
  position: relative;
  color: #3caa79;
  transition: all 0.5s ease;
}
.munu-container a:hover::before {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: #3caa79;
  bottom: -6px;
  opacity: 0;
  animation: fade 0.5s ease forwards;
}

.munu-container a:focus,
.munu-container a:active {
  box-shadow: none;
}
.munu-container a:not(:last-child) {
  margin-right: 18px;
}
</style>
