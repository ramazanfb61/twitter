<template>
  <div class="w-full min-h-28 py-1 border-b border-twitterBorderColor ">
    <div class="flex flex-row items-center ">
      <div class="w-auto mx-3  self-start">
        <img
          src="https://i.pinimg.com/474x/12/8c/58/128c58d703cf7da5a95571fb8d5d5648--funny-cat-videos-funny-cat-pictures.jpg"
          class="rounded-full h-14 cursor-pointer hover:opacity-90 " alt="">
      </div>
      <div class="flex flex-col">
        <div class="">
          <span class="tweetShowOptions inline-block border-twitterWhiteshBorder" v-if="showOptions">
            <span>Herkes</span>
            <SvgIcon :path="icons.chevron" type="mdi" class="inline p-0"></SvgIcon>
          </span>
          <input v-model="tweet" type="text" placeholder="Neler oluyor?"
            class="my-5 px-2 w-full placeholder:text-twitterPlaceHolderWhite border-none focus:outline-none text-lg"
            @click="showOption">
          <span class="tweetShowOptions p-1 px-3 border-none inline-block" v-if="showOptions">
            <span class="flex">
              <SvgIcon type="mdi" :path="icons.earth" class="w-4 h-4 mx-1 self-center"></SvgIcon>
              <span>Herkes yanıtlayabilir</span>
            </span>
          </span>
        </div>
        <div class="border-twitterBorderColor border-t">
          <span class="flex text-twitterButtonColor mt-2 mb-1">
            <span class="flex flex-row basis-3/4">
              <span class="tweetContentTypes">
                <SvgIcon type="mdi" :path="icons.image"></SvgIcon>
              </span>
              <span class="tweetContentTypes">
                <SvgIcon type="mdi" :path="icons.gif"></SvgIcon>
              </span>
              <span class="tweetContentTypes">
                <SvgIcon type="mdi" :path="icons.list"></SvgIcon>
              </span>
              <span class="tweetContentTypes">
                <SvgIcon type="mdi" :path="icons.emoji"></SvgIcon>
              </span>
              <span class="tweetContentTypes">
                <SvgIcon type="mdi" :path="icons.calendar"></SvgIcon>
              </span>
              <span class="tweetContentTypes">
                <SvgIcon type="mdi" class="" :path="icons.location"></SvgIcon>
              </span>
            </span>
            <span>
              <span >
                <span>+</span>
                <span>*</span>
              </span>
              <span 
                :class="{ 'opacity-100': tweet, 'opacity-50':!tweet,'cursor-default':!tweet }"
                class="-z-50 bg-twitterButtonColor cursor-pointer text-twitterTextColor inline-block px-4 py-1 rounded-full mr-3 "
                style="z-index:-100"  
              >
                Tweetle
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

import { mdiImage, mdiFileGifBox, mdiFormatListBulleted, mdiEmoticonHappy, mdiCalendarClock, mdiMapMarker, mdiChevronDown, mdiEarth } from '@mdi/js';

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      showOptions: false,
      tweet: "",
      icons: {
        image: mdiImage,
        gif: mdiFileGifBox,
        list: mdiFormatListBulleted,
        emoji: mdiEmoticonHappy,
        calendar: mdiCalendarClock,
        location: mdiMapMarker,
        chevron: mdiChevronDown,
        earth: mdiEarth,
      }
    }
  },
  methods: {
    showOption() {
      this.showOptions = true;
    }
  },
  watch : {
    tweet(newVal,oldVal){
      console.log(newVal,typeof newVal,newVal.length)
    }
  }
}

</script>