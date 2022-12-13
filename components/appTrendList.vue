<template>
 <div class="w-full mt-2 bg-twitterTrendBackground rounded-3xl ">
  <h1 class="text-center py-3 font-bold text-lg ">İlgini çekebilecek gündemler</h1>
  <div>
    <TrendListItem />
    <TrendListItem />
    <TrendListItem />
    <TrendListItem />
    <TrendListItem />
    <TrendListItem />
  </div>
  <div class="cursor-pointer rounded-b-3xl hover:bg-twitterTrendItemHover transition-colors duration-200">
    <h1 class="ml-3 py-3 font-normal text-base text-twitterButtonColor  ">Daha fazla göster</h1>

  </div>
 </div>
</template>

<script>
import TrendListItem from './TrendListItem.vue';

export default {
  components : {
    TrendListItem
  }
}
</script>