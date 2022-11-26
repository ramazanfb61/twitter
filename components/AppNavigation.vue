<template>
  <nav class="flex flex-col justify-end ">
    <div class="grid grid-cols-2">
      <div></div>
      <div class="mt-2 ml-3">
        <NuxtLink to="/" class="hover:bg-twitterLogoColor flex rounded-full w-12 h-12 text-center justify-center items-center">
          <SvgIcon class="w-7 h-7" type="mdi" :path="logo"></SvgIcon>
        </NuxtLink>
        <NavItem :items="navItems"></NavItem>
        <a class="block text-center bg-twitterButtonColor cursor-pointer rounded-full py-3 mt-2 text-lg w-52 duration-200 transition-colors">
          <a>Tweetle</a>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import NavItem from './NavItem.vue';
import { mdiTwitter,mdiHome, mdiPound, mdiAccountMultiple, mdiBell, mdiEmailOutline, mdiAccount, mdiBookmarkOutline, mdiDotsHorizontalCircleOutline } from '@mdi/js';

export default {
  data() {
    return {
      logo : mdiTwitter,
      navItems: [
        {
          to: "/",
          txt: "Anasayfa",
          icon: mdiHome
        },
        {
          to: "/",
          txt: "Keşfet",
          icon: mdiPound
        },
        {
          to: "/",
          txt: "Topluluklar",
          icon: mdiAccountMultiple
        },
        {
          to: "/",
          txt: "Bildirimler",
          icon: mdiBell
        },
        {
          to: "/",
          txt: "Mesajlar",
          icon: mdiEmailOutline
        },
        {
          to: "/",
          txt: "Yer İşaretleri",
          icon: mdiBookmarkOutline
        },
        {
          to: "/",
          txt: "Profil",
          icon: mdiAccount
        },
        {
          to: "/",
          txt: "Daha fazla",
          icon: mdiDotsHorizontalCircleOutline
        }
      ],
    }
  },

  components: {
    NavItem,
    SvgIcon
  }
}
</script>

<style>

</style>