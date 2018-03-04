<template>
  <div
    id="overview"
    class="mdl-layout__tab-panel is-active">

    <repo-list
      v-if="reposFound.length > 0"
      :includeOwner="true"
      :repositories="reposFound" />

    <user-list
      v-if="usersFound.length > 0"
      :users="usersFound" />

  </div>

</template>

<script>
import RepoList from '@/components/RepoList'
import UserList from '@/components/UserList'
import { searchRepositories } from '../api/repositories'
import { searchUsers } from '../api/users'

export default {
  name: 'SearchResults',
  components: {
    RepoList,
    UserList
  },
  watch: {
    '$route': 'fetchData'
  },
  data () {
    return {
      reposFound: [],
      usersFound: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      [this.reposFound, this.usersFound] = await Promise.all([
        searchRepositories(this.$route.query.q),
        searchUsers(this.$route.query.q)
      ])
    }
  }
}
</script>

<style>
.section--center {
  width: 100%;
  margin-bottom: 48px;
}

main > .mdl-layout__tab-panel {
  padding: 8px;
  padding-top: 48px;
}
</style>
