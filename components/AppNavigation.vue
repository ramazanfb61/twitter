<template>
  <nav class="flex flex-col justify-end ">
    <div class="grid grid-cols-2 h-screen">
      <div></div>
      <div class="ml-3 flex flex-col justify-center">
        <div role="nav-items" class="">
          <NuxtLink to="/"
            class="hover:bg-twitterLogoColor flex rounded-full w-12 h-12 text-center justify-center items-center">
            <SvgIcon class="w-7 h-7" type="mdi" :path="logo"></SvgIcon>
          </NuxtLink>
          <NavItem :items="navItems"></NavItem>
          <a
            class="block text-center bg-twitterButtonColor cursor-pointer rounded-full py-3 mt-2 text-lg w-60 duration-200 transition-colors">
            <span class="">Tweetle</span>
          </a>
        </div>
        <div class="mt-5 flex items-end">
          <NavProfile></NavProfile>
        </div>
      </div>
      
    </div>
  </nav>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import NavItem from './NavItem.vue';
import NavProfile from "./NavProfile.vue"
import { mdiTwitter, mdiHome, mdiPound, mdiAccountMultiple, mdiBell, mdiEmailOutline, mdiAccount, mdiBookmarkOutline, mdiDotsHorizontalCircleOutline } from '@mdi/js';

export default {
  components: {
    NavItem,
    SvgIcon,
    NavProfile,
  },
  data() {
    return {
      logo: mdiTwitter,
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


}
</script>

<style>

</style>