<template>
	<div class=" w-full	 h-14 sticky top-0  backdrop-blur-sm bg-twitterPrimaryColor bg-opacity-75 ">
		<div class="flex p-3 flex-row justify-between ">
			<NuxtLink to="/">
				<h4 class="font-medium text-xl">Ana sayfa</h4>
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