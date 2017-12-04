<template>
  <div>
    <div
      id="app"
      class="container-fluid">
      <menu-nav-bar v-if="['Welcome'].indexOf($route.name) === -1"/>
      <router-view/>
    </div>

    <footer-bar/>
  </div>
</template>

<script>
import MenuNavBar from '@/components/MenuNavBar'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'App',
  components: {
    MenuNavBar,
    FooterBar
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
