<template>
	<c-box>
		<c-heading align="center" fontWeight="500">
			Create New Post
		</c-heading>
		<PostEditor />
	</c-box>
</template>

<script type="text/javascript">
import { CHeading,CBox } from '@chakra-ui/vue'
export default {
	layout: 'admin',
	components: {
		CHeading,
		CBox,
	}
}
</script>