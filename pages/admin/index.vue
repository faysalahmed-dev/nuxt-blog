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

<script type="text/javascript">
import AdminAside from '@/components/admin/AdminAside';
import { CSimpleGrid } from '@chakra-ui/vue'
import PostItem from '@/components/blog/PostItem'
import { mapGetters } from 'vuex'

export default {
	computed: mapGetters({
    	postsData: 'posts',
  	}),
	components: {
		AdminAside,
		CSimpleGrid
	},
  // middleware: 'auth',
	layout: 'admin'
}

</script>