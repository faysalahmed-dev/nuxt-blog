<template>
	<c-menu>
	  <c-menu-button right-icon="chevron-down">
	    {{ userName }}
	  </c-menu-button>
	  <c-menu-list>
	    <c-menu-item>
	    	<nuxt-link :to="{name: 'admin'}">Dashboard</nuxt-link>
	    </c-menu-item>
	    <c-menu-item @click="$emit('handleLogout')">Logout</c-menu-item>
	  </c-menu-list>
	</c-menu>
</template>

<script type="text/javascript">
	import { CMenu, CMenuList, CMenuButton, CMenuItem } from '@chakra-ui/vue';
	export default {
		props: {
			userName: {
				type: String,
				required: true
			}
		},
		components: {
			CMenu, CMenuList, CMenuButton, CMenuItem
		}
	}
</script>