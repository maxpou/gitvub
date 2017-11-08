<template>
  <div class="list-group">
    <router-link
    v-for="(repository, index) in currentUserRepositories" :key="index"
      :to="{ name: 'RepoDetail', params: { user: currentUser, repository: repository.name }}"
      class="btn btn-outline-info btn-block btn-sm" active-class="active"
    >{{ repository.name }}</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'MenuUserRepoList',
  computed: {
    ...mapState({
      currentUser: state => state.repositories.currentUser
    }),
    ...mapGetters([
      'currentUserRepositories'
    ])
  },
  methods: {
    ...mapActions([
      'loadUserRepositories'
    ]),
    fetchData () {
      this.loadUserRepositories(this.$route.params.user)
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
