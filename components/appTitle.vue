<template>
	<div class="border w-content h-14  sticky top-0">
		<div class=" opacity-75 blur-md"></div>
		<div class="absolute z-10 w-full flex p-3 flex-row justify-between">
			<NuxtLink to="/">
				<h4 class="">Ana sayfa</h4>
			</NuxtLink>
			<SvgIcon type="mdi" :path="starIcon"></SvgIcon>
		</div>
	</div>
</template>

<script>
import { mdiStarFourPoints } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon'


export default {
	data(){
		return {
			starIcon : mdiStarFourPoints,
		}
	},
	components : {
		SvgIcon		
	}
}
</script>