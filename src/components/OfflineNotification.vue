<template>
  <div
    id="snackbar-offline"
    class="mdl-js-snackbar mdl-snackbar">
    <div class="mdl-snackbar__text" />
    <button
      class="mdl-snackbar__action"
      type="button"/>
  </div>
</template>
<script>
export default {
  props: {
    isOffline: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isOffline (offline) {
      if (!offline) {
        return
      }
      const snackbarContainer = document.querySelector('#snackbar-offline')
      snackbarContainer.MaterialSnackbar.showSnackbar({
        message: '⚠️ You are offline.',
        timeout: 5000
      })
    }
  }
}
</script>
