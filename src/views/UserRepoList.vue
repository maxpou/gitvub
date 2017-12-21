<template>

  <div class="mdl-layout__tab-panel is-active" id="overview">

      <profile :user="currentUser" />

      <repo-list :repositories="currentUserRepositories" />

  </div>

  <!-- <div class="repoList">
    <div>
      <a
        v-if="!isFullyLoaded"
        @click="loadMoreRepositories($route.params.user)"
        class="btn btn-outline-info btn-block">Load more repositories</a>
    </div>
  </div> -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Profile from '@/components/Profile'
import RepoList from '@/components/RepoList'

export default {
  name: 'UserRepoList',
  components: {
    Profile,
    RepoList
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

<style scoped>
main > .mdl-layout__tab-panel {
  padding: 8px;
  padding-top: 48px;
}

.mdl-card__supporting-text {
  width: calc(100% - 80px);
  margin: 40px;
  padding: 0;
}
</style>
