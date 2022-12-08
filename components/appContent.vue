<template>
	<div class="w-content mr-10 border border-x-twitterBorderColor">
		<AppTitle />
		<section>
			<div>
				<AppTweet />
			</div>
		</section>
		<section class="">
			<AppTweets />
		</section>
		
	</div>
</template>

<script>
import AppTitle from "./appTitle.vue"
import AppTweet from "./appNewTweet.vue"
import AppTweets from "./appTweets.vue";

export default {
	components: {
		AppTitle,
		AppTweet,
		AppTweets,
	}
}


</script>