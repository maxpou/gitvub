<template>
  <transition name="fade">
    <div
      v-show="isOffline"
      class="alert alert-info">
      <span>⚠️ You are offline.</span>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    isOffline: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transform: scaleY(1);
}
.fade-enter, .fade-leave-to {
  transform: scaleY(0);
  transition: transform .5s ease;
}
</style>
