<template>
  <div class="container">
    <menu-nav-bar/>
    <div class="row">
      <div class="menu-right col-12 col-md-9">
        <h2><router-link :to="{ name: 'RepoList', params: { user: currentUser }}">{{ currentUser }}</router-link> / {{ currentRepository }}</h2>

        <p>Languages:</p>
        <ul v-if="totalBytesLanguages">
          <li v-for="(bytes, language) in repositoryDetail" class="list-unstyled">
            {{ language }}: {{ bytesPerLanguagePercentage(bytes, totalBytesLanguages) }}%
          </li>
        </ul>
        <p v-else class="text-muted">No language found.</p>
      </div>

      <div class="repo-detail col-6 col-md-3">
        <menu-user-repo-list :repositories="currentUserRepositories"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import MenuNavBar from '@/components/MenuNavBar'
import MenuUserRepoList from '@/components/MenuUserRepoList'

export default {
  name: 'RepoListItem',
  components: {
    MenuNavBar,
    MenuUserRepoList
  },
  computed: {
    ...mapState({
      currentUser: state => state.repositories.currentUser,
      currentRepository: state => state.repositories.currentRepository,
      repositoryDetail: state => state.repositories.repositoryDetail
    }),
    ...mapGetters([
      'currentUserRepositories'
    ]),
    // Sum total bytes per language
    totalBytesLanguages () {
      return Object.values(this.repositoryDetail).reduce((accumulator, current) => {
        return accumulator + current
      }, 0)
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    ...mapActions([
      'loadRepositoryDetail',
      'loadUserRepositories'
    ]),
    fetchData () {
      this.loadRepositoryDetail(this.$route.params)
      this.loadUserRepositories(this.$route.params.user)
    },
    bytesPerLanguagePercentage (nbBytes, total) {
      return Math.round(nbBytes / total * 100)
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
