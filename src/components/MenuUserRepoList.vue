<template>
  <div class="list-group">
    <router-link
      v-for="(repository, index) in repositories"
      :key="index"
      :to="{ name: 'RepoDetail', params: { user: repository.owner.login, repository: repository.name }}"
      class="btn btn-outline-info btn-block btn-sm"
      active-class="active"
    >{{ repository.name }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuUserRepoList',
  props: {
    repositories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.btn {
  white-space: normal;
}
</style>
