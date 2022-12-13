<template>
  <div class="flex flex-row">
    <header class="w-navi flex justify-end mr-8">
      <AppNavigation></AppNavigation>
    </header>
    <main class="h-auto md:w-main w-screen flex flex-row">
      <AppContent></AppContent>
      <AppTrends></AppTrends>
    </main>
  </div>
</template>

<script>
import AppNavigation from '../components/AppNavigation.vue';
import AppContent from "../components/appContent.vue";
import AppTrends from "../components/appTrends.vue";

export default {
  name: 'IndexPage',
  components: {
    AppNavigation,
    AppContent,
    AppTrends,
  }
}
</script>
