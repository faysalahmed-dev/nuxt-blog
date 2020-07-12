<template>
  <c-flex direction="column" bg="gray.100" p="4" borderRadius="5px" h="460px">
    <c-flex style="flex-grow: 1;" align="center" justify="center">
      <c-image :src="postData.postImage" w="200px" mx="auto" />
    </c-flex>
    <c-text as="h2" fontSize="lg" mb="4" color="gray.900">{{
      postData.postTitle | truncated(40)
    }}</c-text>
    <c-text fontWeight="400" mb="4">{{
      postData.postBody | truncated(120)
    }}</c-text>
    <c-flex
      align="center"
      justify="space-between"
      :fill="$chakra.theme.colors.blue['500']"
      color="blue.500"
    >
      <c-link
        :to="{ name: 'blog-slug', params: { slug: postSlug } }"
        class="center-icon"
        as="nuxt-link"
      >
        Learn More
        <unicon name="arrow-right" />
      </c-link>
      <c-flex>
        <c-box class="center-icon" mr="3">
          <unicon name="eye" />
          1.2k
        </c-box>
        <c-box class="center-icon">
          <unicon name="comment" />
          8
        </c-box>
      </c-flex>
    </c-flex>
  </c-flex>
</template>

<script>
import { CGrid, CFlex, CImage, CText, CBox, CLink } from '@chakra-ui/vue'
export default {
  props: {
    postData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    postSlug() {
      return this.postData.postTitle.trim().replace(/\s/gi, '-')
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
