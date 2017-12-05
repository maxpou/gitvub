<template>
  <div class="file-explorer">
    <ul class="list-group">
      <li
        v-for="content in orderedItems"
        :key="content.sha"
        class="list-group-item">
        <span v-if="content.type === 'file'">📄</span>
        <span v-else>🗂</span>
        {{ content.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FileExplorer',
  props: {
    repoContent: {
      // warning, may be an object
      type: Array,
      default: () => []
    }
  },
  computed: {
    orderedItems () {
      const copy = [...this.repoContent]
      return copy.sort((contentA, contentB) => contentB.type < contentA.type)
    }
  }
}
</script>

<style scoped>
.file-explorer {
  text-align: left;
}
</style>
