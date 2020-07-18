<template>
	<c-box>
		<c-input placeholder="Post Title...." />
		<c-input type="file" @input="handleInput"/>
		<c-image :src="filePath" v-if="filePath"/>
		<c-textarea placeholder="Write Here...." />
		<c-button>Create Post</c-button>
		<c-button>Save as Draft</c-button>
		<c-button>Cancle</c-button>
	</c-box>
</template>

<script type="text/javascript">
import { CBox,CInput,CTextarea,CImage,CButton } from '@chakra-ui/vue'
export default {
	name: 'PostEditor',
	data() {
		return {filePath: null}
	},
	components: {
		CBox,
		CInput,
		CTextarea,
		CImage,
		CButton
	},
	methods: {
		handleInput(filePath,event) {
			this.filePath = window.URL.createObjectURL(event.target.files[0])
		}
	}
}
</script>