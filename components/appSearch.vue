<template>
  <div  class="sticky bg-twitterPrimaryColor z-50 flex flex-col justify-center top-0 h-14 focus-within:border-twitterButtonColor group focus-within:text-twitterButtonColor">
    <div class="h-10 bg-twitterSearchColor rounded-full  group-focus-within:border-twitterButtonColor group-focus-within:border">
      <div class="h-full flex items-center  ">
        <div class="flex items-center">
          <div class="flex justify-around items-center">
            <span class="h-full">
              <SvgIcon :path="icons.magnify" type="mdi" />
            </span>
            <input v-model="searchBarContent" class="h-full border focus:outline-none" placeholder="Burdayım" type="text">
            <span @click="emptySearchBar" class="inline-block text-black rounded-full bg-twitterButtonColor">
              <SvgIcon v-show="searchBarContent" :path="icons.close" type="mdi" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mdiMagnify,mdiClose } from '@mdi/js';
import SvgIcon from "@jamescoyle/vue-icon"

export default {
  components : {
    SvgIcon,
  },
  data(){
    return {
      icons : {
        magnify:mdiMagnify,
        close:mdiClose
      },
      searchBarContent:"",

    }
  },
  methods : {
    emptySearchBar(){
      this.searchBarContent = ""
    }
  }

}

</script>