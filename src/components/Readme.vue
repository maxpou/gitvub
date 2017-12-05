<template>
  <div
    v-if="readme"
    v-html="readmeMarkdown"
    class="detail readme"
  />
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
      console.log(this.readme)
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
.readme {
  text-align: left;
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
