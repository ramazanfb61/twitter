<template>
  <div class="cursor-pointer">
    <NuxtLink :to="item.to" v-for="item in items" :key="item.txt" class="nav-parent d-block">
      <div class="nav-child p-3 pr-4 transition ease-in-out duration-200 rounded-3xl min-w-45 max-w-max">
        <SvgIcon type="mdi" :path="item.icon" class="inline-block align-top mr-5"></SvgIcon>
        <span class="text-xl mx-2" :to="item.to">{{ item.txt }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<style>

</style>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  
  data() {
    return {
    }
  },
  components: {
    SvgIcon
  },
  props: {
    items: {
      Array,

    },
  },
}
</script>