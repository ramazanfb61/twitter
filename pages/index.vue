<template>
  <div class="flex flex-row">
    <header class="w-navi">
      <AppNavigation></AppNavigation>
    </header>
    <main class="w-main flex flex-row">
      <AppContent class="w-content border border-twitterBorderColor mr-10"></AppContent>
      <AppTrends class="w-trend border border-twitterBorderColor "></AppTrends>
    </main>
  </div>
</template>

<script>
import AppNavigation from '../components/AppNavigation.vue';
import AppContent from "../components/appContent.vue"
import AppTrends from "../components/appTrends.vue"

export default {
  name: 'IndexPage',
  components: {
    AppNavigation,
    AppContent,
    AppTrends,
  }
}
</script>
