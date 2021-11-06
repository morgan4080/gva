<template>
    <div class="conf">
      <AppNav />
      <Nuxt />
      <AppFooter />
      <portal-target name="dropdown" slim />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { PortalTarget } from 'portal-vue'
import AppFooter from "~/components/AppFooter.vue"
import AppNav from "~/components/AppNav.vue"

export default Vue.extend({
  components: {
    AppFooter,
    AppNav,
    PortalTarget
  }
})
</script>
<style>
html{
  scroll-behavior:smooth
}

::-webkit-scrollbar{
  width:14px
}

::-webkit-scrollbar-track{
  background:#fff
}

::-webkit-scrollbar-thumb{
  background:#52596d;
  border:2px solid #fcf9ed;
  border-radius:25px
}

::-webkit-scrollbar-thumb:hover{
  background:linear-gradient(180deg, #902dc9,#ed64a6,#ea7500)
}

a.nuxt-link-exact-active {
  font-weight: 800 !important;;
}
</style>
