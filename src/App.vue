<template>
  <div
    id="app"
    class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

    <menu-nav-bar v-show="['Welcome'].indexOf($route.name) === -1"/>

    <main class="mdl-layout__content"
    v-bind:class="{ welcome: ['Welcome'].indexOf($route.name) !== -1 }">

      <offline-notification :is-offline="!$store.state.navigator.isOnline"/>

      <router-view/>

    </main>

    <footer-bar/>

  </div>
</template>

<script>
import MenuNavBar from '@/components/MenuNavBar'
import FooterBar from '@/components/FooterBar'
import OfflineNotification from '@/components/OfflineNotification'

export default {
  name: 'App',
  components: {
    MenuNavBar,
    FooterBar,
    OfflineNotification
  },
  mounted () {
    window.addEventListener('offline', (e) => this.$store.commit('OFFLINE'))
    window.addEventListener('online', (e) => this.$store.commit('ONLINE'))
  }
}
</script>

<style>
main.mdl-layout__content {
  background-color:#f5f5f5;
}
.mdl-layout__content.welcome {
  background: url('./assets/wallpaper.jpg') center / cover;
  background-repeat: no-repeat;
}
</style>
