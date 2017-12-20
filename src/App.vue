<template>
  <div>
    <div
      id="app"
      class="container-fluid">
      <menu-nav-bar v-if="['Welcome'].indexOf($route.name) === -1"/>
      <offline-notification :is-offline="!$store.state.navigator.isOnline"/>
      <router-view/>
    </div>

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
