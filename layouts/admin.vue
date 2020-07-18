<template>
  <CThemeProvider>
    <CReset />
    <c-flex direction="column" minH="100vh">
      <AppHeader />
      <AdminAside :user="user" v-if="user" />
      <c-box style="flex-grow: 1;" w="calc(100% - 250px)" ml="auto">
        <Nuxt />
      </c-box>
    </c-flex>
  </CThemeProvider>
</template>

<script>
import { CThemeProvider, CReset, CFlex, CBox } from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultLayout',
  middleware: ['checkSessions', 'authenticated'],
  computed: mapGetters({
    user: 'currentUser',
  }),
  components: {
    CThemeProvider,
    CReset,
    CFlex,
    CBox,
  },
}
</script>
