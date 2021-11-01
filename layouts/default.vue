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
a.nuxt-link-exact-active {
  font-weight: 800 !important;;
}
</style>
