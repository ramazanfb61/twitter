<template>
  <div class="w-full min-h-28 py-1 border-b border-twitterBorderColor ">
    <div class="flex flex-row items-center ">
      <div class="w-auto mx-3  self-start">
        <img
          src="https://i.pinimg.com/474x/12/8c/58/128c58d703cf7da5a95571fb8d5d5648--funny-cat-videos-funny-cat-pictures.jpg"
          class="rounded-full h-14 cursor-pointer hover:opacity-90 " alt="">
      </div>
      <div class="flex flex-col">
        <div class="py-2">
          <span class="tweetShowOptions" v-if="showOptions">Herkes</span>
          <input type="text" placeholder="Neler oluyor?"
            class="my-5 px-2 w-full placeholder:text-twitterPlaceHolderWhite border-none focus:outline-none text-lg"
            @click="showOption">
          <span class="tweetShowOptions" v-if="showOptions">Herkes yanıtlayabilir</span>
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
            <span class="bg-twitterButtonColor cursor-pointer text-twitterTextColor flex justify-center items-center rounded-full basis-1/4 mr-3">
              Tweetle
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'

import { mdiImage, mdiFileGifBox, mdiFormatListBulleted, mdiEmoticonHappy, mdiCalendarClock, mdiMapMarker } from '@mdi/js';

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      showOptions: false,
      icons: {
        image: mdiImage,
        gif: mdiFileGifBox,
        list: mdiFormatListBulleted,
        emoji: mdiEmoticonHappy,
        calendar: mdiCalendarClock,
        location: mdiMapMarker
      }
    }
  },
  methods: {
    showOption() {
      this.showOptions = true;
    }
  }
}

</script>