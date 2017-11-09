<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <router-link class="navbar-brand" :to="{ name: 'Welcome' }">GitVub</router-link>
  </nav>
</template>

<script>
export default {
  name: 'MenuNavBar'
}
</script>
