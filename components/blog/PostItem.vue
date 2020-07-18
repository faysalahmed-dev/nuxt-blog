<template>
  <c-flex direction="column" 
    bg="gray.100" p="4" borderRadius="5px" h="460px">
    <c-flex style="flex-grow: 1;" align="center" justify="center">
      <c-image :src="postData.post_image" w="200px" mx="auto" />
    </c-flex>
    <c-text as="h2" fontSize="lg" mb="4" color="gray.900">{{
      postData.title | truncated(40)
    }}</c-text>
    <c-text fontWeight="400" mb="4">{{
      postData.content | truncated(120)
    }}</c-text>
    <c-flex
      align="center"
      justify="space-between"
      :fill="$chakra.theme.colors.blue['500']"
      color="blue.500"
    >
      <c-link
        :to="{ name: 'blog-slug', params: { slug: postData.slug } }"
        class="center-icon"
        as="nuxt-link"
      >
        <c-text>Learn More</c-text>
        <c-box><unicon name="arrow-right" /></c-box>
      </c-link>
      <c-flex>
        <c-box class="center-icon" mr="3">
          <c-box><unicon name="eye" /></c-box>
          <c-text>1.2k</c-text>
        </c-box>
        <c-box class="center-icon">
          <c-box><unicon name="comment"/></c-box>
          <c-text>8</c-text>
        </c-box>
      </c-flex>
    </c-flex>
  </c-flex>
</template>

<script>
import { CGrid, CFlex, CImage, CText, CBox, CLink } from '@chakra-ui/vue'
export default {
  name: 'PostItem',
  props: {
    postData: {
      type: Object,
      required: true,
    },
  },
  components: {
    CGrid,
    CBox,
    CFlex,
    CImage,
    CText,
    CLink,
  },
}
</script>

<style scoped>
.center-icon {
  display: flex;
  align-items: center;
}
</style>
