<template>

  <div
    class="mdl-layout__tab-panel is-active"
    id="overview">

    <profile
      v-if="!notFoundUser"
      :user="currentUser" />

    <repo-list
      v-if="currentUser.login"
      :repositories="currentUserRepositories" />

    <not-found
      v-if="notFoundUser"
      :occurence="$route.params.user"
      :type="'user'" />

  </div>

<!--
  <div class="repoList">
    <div>
      <a
        v-if="!isFullyLoaded"
        @click="loadMoreRepositories($route.params.user)"
        class="btn btn-outline-info btn-block">Load more repositories</a>
    </div>
  </div>
  -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Profile from '@/components/Profile'
import RepoList from '@/components/RepoList'
import NotFound from '@/components/NotFound'

export default {
  name: 'UserRepoList',
  components: {
    Profile,
    RepoList,
    NotFound
  },
  computed: {
    ...mapGetters([
      'currentUserRepositories',
      'currentUser',
      'notFoundUser',
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
      'loadUser'
      // 'loadMoreRepositories'
    ]),
    fetchData () {
      this.loadUser(this.$route.params.user)
      this.loadUserRepositories(this.$route.params.user)
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
