<template>
  <footer class="footer">
    <div class="container">
      <span class="text-muted small"><a href="https://github.com">GitHub</a> + <a href="https://vuejs.org/">VueJS</a> = GitVub.</span>
      <span class="me text-muted text-right">@maxpou</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #f5f5f5;
}
.text-muted > a {
  color: inherit
}
.me {
  opacity: 0.65;
  float: right;
}
</style>
