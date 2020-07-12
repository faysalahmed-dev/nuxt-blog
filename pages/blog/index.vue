<template>
  <div style="padding: 40px 0;">
    <c-simple-grid
      :columns="{ sm: 2, lg: 3 }"
      class="app-container"
      mx="auto"
      spacing="8"
    >
      <PostItem
        v-for="postData in postsData"
        :postData="postData"
        :key="postData.postTitle"
      />
    </c-simple-grid>
  </div>
</template>

<script>
import { CSimpleGrid } from '@chakra-ui/vue'
import PostItem from '@/components/blog/PostItem'
import postsData from '@/data'

export default {
  data() {
    return { postsData }
  },
  components: {
    CSimpleGrid,
    PostItem,
  },
}
</script>

<style scoped></style>
