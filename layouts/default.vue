<template>
  <CThemeProvider>
    <CReset />
    <c-flex direction="column" minH="100vh">
      <Header />
      <Nuxt style="flex-grow: 1;" />
    </c-flex>
  </CThemeProvider>
</template>

<script>
import { CThemeProvider, CReset, CFlex } from '@chakra-ui/vue'
import Header from '@/components/Header'

export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CReset,
    Header,
    CFlex,
  },
}
</script>
