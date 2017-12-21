<template>
  <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col">
      <ul class="mdl-list">
        <li
          v-for="content in orderedItems"
          :key="content.sha"
          class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i v-if="content.type === 'file'" class="material-icons mdl-list__item-icon">description</i>
            <i v-else class="material-icons mdl-list__item-icon">folder</i>
            {{ content.name }}
          </span>
        </li>
      </ul>
    </div>
  </section>
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
      const repoContentCopy = [...this.repoContent]
      return repoContentCopy.sort((contentA, contentB) => contentB.type < contentA.type)
    }
  }
}
</script>

<style scoped>
.section--center {
  width: 100%;
  margin-bottom: 48px;
}
.mdl-list {
  padding: 0;
  margin: 0;
}
.mdl-list__item {
  padding: 0px 16px;
}
</style>
