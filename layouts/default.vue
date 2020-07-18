<template>
  <CThemeProvider>
    <CReset />
    <c-flex direction="column" minH="100vh">
      <AppHeader />
      <Nuxt style="flex-grow: 1;" />
    </c-flex>
  </CThemeProvider>
</template>

<script>
import { CThemeProvider, CReset, CFlex } from '@chakra-ui/vue'

export default {
  name: 'DefaultLayout',
  middleware: 'checkSessions',
  components: {
    CThemeProvider,
    CReset,
    CFlex,
  },
}
</script>
