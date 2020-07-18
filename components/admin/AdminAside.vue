<template>
	<c-list
		textTransform="uppercase"
		pos="fixed"
		bottom="0"
		bg="vue.500"
		height="calc(100% - 82px)"
		w="250px"
		py="30px"
		color="#fff">
		<c-list-item>
			<c-stack is-inline align="center" p="15px 20px">
			  	<c-avatar :showBorder="false" size="md" :name="user.name" :src="user.picture" />
				<c-text>{{ user.name }}</c-text>
			</c-stack>
	  </c-list-item>
	  <c-list-item>
	  	<c-link d="block"
	  		as="nuxt-link"
	  		:to="{name: 'admin-create-post'}"
	  		p="15px 20px" borderBottom="1px solid #ffffff45">create new post</c-link>
	  </c-list-item>
	  <c-list-item>
	  	<c-link as="nuxt-link"
	  		d="block"
	  		:to="{name: 'admin'}"
	  		p="15px 20px"
	  		borderBottom="1px solid #ffffff45">Post</c-link>
	  </c-list-item>
	</c-list>
</template>

<script type="text/javascript">
import {CList,CListItem,CAvatar, CStack, CText, CLink} from '@chakra-ui/vue';
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
	name: 'AdminAside',
	components: { CList,CListItem, CAvatar, CStack, CText, CLink }
}
</script>

<style type="text/css" scoped>
	.admin-link {
		padding-left: 30px;

	}
</style>
