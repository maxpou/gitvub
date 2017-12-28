<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">GitVub</span>
    <nav class="mdl-navigation">
      <router-link
        :to="{ name: 'Welcome' }"
        class="mdl-navigation__link">Home
      </router-link>
      <router-link
        :to="{ name: 'About' }"
        class="mdl-navigation__link">About
      </router-link>
    </nav>
  </div>
</template>
