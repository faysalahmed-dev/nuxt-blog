<template> 
	<c-box maxW="800px" w="95%" mx="auto" py="8">
		<c-heading mb="2">{{postData.title}}</c-heading>
		<c-text color="gray.400" >
			{{postData.published_date | timeFormat }} - {{postData.author}}
		</c-text>
		<c-image my="7" 
			:src="postData.post_image" 
			maxW="400px" 
			w="90%" 
			mx="auto"
		/>
		<c-text fontSize="lg" pb="4">{{postData.content}}</c-text>
	</c-box>
</template>

<script>
import { CImage, CText, CBox, CHeading } from '@chakra-ui/vue'

export default {
	asyncData({params, $fireStore}) {
		return $fireStore.collection('posts')
		.where("slug", "==", params.slug)
		.get()
		.then(snap => {
			if(snap.size) {
				let data = snap.docs[0].data()
				data = {
					...data,
					published_date: data.published_date.toDate()
				}
				return {postData: data}
			} else {
				// handle error later
				return {postData: null}
			}
		}).catch(err => {
			// handle error later
		})
	},
	components: {
		CImage, CText, CBox, CHeading
	},
}
</script>

<style></style>
