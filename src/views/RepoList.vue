<template>
  <div class="repoList">

    <profile :user="currentUser" />

    <div class="card-columns">
      <repo-list-item
        v-for="(repository, index) in currentUserRepositories"
        :key="index"
        :repository="repository"
      />
    </div>

    <div>
      <a
        v-if="!isFullyLoaded"
        @click="loadMoreRepositories($route.params.user)"
        class="btn btn-outline-info btn-block">Load more repositories</a>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Profile from '@/components/Profile'
import RepoListItem from '@/components/RepoListItem'

export default {
  name: 'RepoList',
  components: {
    Profile,
    RepoListItem
  },
  computed: {
    ...mapGetters([
      'currentUserRepositories',
      'currentUser',
      'isFullyLoaded'
    ])
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    ...mapActions([
      'loadUserRepositories',
      'loadUser',
      'loadMoreRepositories'
    ]),
    fetchData () {
      this.loadUserRepositories(this.$route.params.user)
      this.loadUser(this.$route.params.user)
    }
  }
}
</script>
