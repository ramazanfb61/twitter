<template>
  <div class="border-b border-twitterBorderColor">
    <div class="h-auto px-3">
      <div class="flex flex-row h-full p-1">

        <div class="w-auto h-12 flex shrink mr-3">
          <img
            src="https://i.pinimg.com/474x/12/8c/58/128c58d703cf7da5a95571fb8d5d5648--funny-cat-videos-funny-cat-pictures.jpg"
            class="rounded-full  h-full" alt="">
        </div>

        <div class="flex flex-col  h-full text-15">
          <a href="javascript:;">
            <span class="hover:underline">Profil</span>
            <span class="text-twitterMuteColor">
              <span>@id</span>
              <span> * </span>
              <span class="hover:underline"> Tarih</span>
            </span>
          </a>
          <div>Çok Tatlıyım &#129409;</div>
          <div class="grid grid-cols-4 justify-items-start mt-3">
            <span class="tweetActionButtons">
              <SvgIcon class="actionButtonsSvg" type="mdi" :path="icons.comments"></SvgIcon>
              <span class="text-twitterPlaceHolder">0</span>
            </span>
            <span class="tweetActionButtons">
              <SvgIcon class="actionButtonsSvg" type="mdi" :path="icons.retweet"></SvgIcon>
              <span class="text-twitterPlaceHolder">0</span>
            </span>
            <span class="tweetActionButtons">
              <SvgIcon class="actionButtonsSvg" type="mdi" :path="icons.heart"></SvgIcon>
              <span class="text-twitterPlaceHolder">0</span>
            </span>
            <span class="tweetActionButtons">
              <SvgIcon class="actionButtonsSvg" type="mdi" :path="icons.share"></SvgIcon>
              <span class="text-twitterPlaceHolder">0</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon"
import { mdiMessageOutline,mdiSync,mdiCardsHeartOutline,mdiExportVariant } from '@mdi/js';
export default {
  components : {
    SvgIcon,
  },
  data() {
    return {
      icons : {
        comments: mdiMessageOutline,
        retweet : mdiSync,
        heart: mdiCardsHeartOutline,
        share : mdiExportVariant
      }
    }
  },

}
</script>