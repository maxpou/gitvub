<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ repository.name }}</h4>
      <p class="card-text">{{ repository.description }}</p>

      <router-link :to="{ name: 'RepoDetail', params: { user: repository.owner.login, repository: repository.name }}"
        class="btn btn-outline-info btn-block btn-sm"
      >details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepoListItem',
  props: ['repository']
}
</script>
