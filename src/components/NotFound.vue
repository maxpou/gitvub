<template>
  <section class="section__text mdl-cell mdl-cell--12-col">
    <h5 v-if="type === 'page'">Page not found</h5>
    <h5 v-else>We couldn’t find any {{ type }} matching '{{ occurence }}'</h5>
  </section>
</template>

<script>
export default {
  name: 'ProfileNotFound',
  props: {
    occurence: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'page'
    }
  }
}
</script>
