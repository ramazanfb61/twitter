<template>
  <div class="w-trend hidden md:block">
    <AppSearch />
    <AppTrendList />
  </div>
</template>


<script>
import AppSearch from "./appSearch.vue"
import AppTrendList from "./appTrendList.vue"

export default {
  components: {
    AppSearch,
    AppTrendList,
  }
}
</script>