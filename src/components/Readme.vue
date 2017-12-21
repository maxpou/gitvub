<template>
  <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col">
      <div
        v-if="readme"
        v-html="readmeMarkdown"
        class="readme mdl-card__supporting-text"
      />
    </div>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  name: 'Readme',
  props: {
    readme: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    readmeMarkdown () {
      if (typeof this.readme.content === 'undefined') {
        return ''
      }
      const markdown = atob(this.readme.content)
      return marked(markdown)
    }
  }
}
</script>

<style scoped>
.section--center {
  width: 100%;
  margin-bottom: 48px;
}
div.readme >>> pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}
</style>
