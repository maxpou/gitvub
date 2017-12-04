<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ repository.name }}</h4>
      <p class="card-text">{{ repository.description }}</p>
      <p>
        <span
          v-if="repository.language"
          class="badge badge-language">{{ repository.language }}</span>
        <span
          v-if="repository.license"
          class="badge badge-default">⚖️ {{ repository.license.spdx_id }}</span>
        <span
          v-if="repository.forks_count"
          class="badge badge-default">⑂ {{ repository.forks_count }}</span>
        <span
          v-if="repository.stargazers_count"
          class="badge badge-default">🌟 {{ repository.stargazers_count }}</span>
      </p>
      <router-link
        :to="{ name: 'RepoDetail', params: { user: repository.owner.login, repository: repository.name }}"
        class="btn btn-outline-info btn-block btn-sm"
      >details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoListItem',
  props: {
    repository: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.badge-language {
  background-color: lightblue;
}
</style>
