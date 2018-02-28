<template>
  <div
    id="app"
    :class="{ welcome: ['Welcome'].indexOf($route.name) !== -1 }"
    class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

    <menu-nav-bar />
    <menu-lateral />

    <main class="mdl-layout__content">

      <offline-notification :is-offline="!$store.state.navigator.isOnline"/>

      <router-view/>

    </main>

  </div>
</template>

<script>
import MenuNavBar from '@/components/MenuNavBar'
import MenuLateral from '@/components/MenuLateral'
import OfflineNotification from '@/components/OfflineNotification'

export default {
  name: 'App',
  components: {
    MenuNavBar,
    MenuLateral,
    OfflineNotification
  },
  mounted () {
    window.addEventListener('offline', (e) => this.$store.commit('OFFLINE'))
    window.addEventListener('online', (e) => this.$store.commit('ONLINE'))
  }
}
</script>

<style>
main.mdl-layout {
  background-color:#f5f5f5;
}
.mdl-layout.welcome {
  background: url('./assets/wallpaper.jpg') center / cover;
  background-repeat: no-repeat;
}
.mdl-layout__drawer-button {
  color: white;
}
</style>
