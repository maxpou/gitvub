<template>
  <div class="mdl-layout__tab-panel is-active" id="overview">

    <repository-header
      :currentUser="currentUser"
      :repository="detail"
    />

    <file-explorer
      v-if="repoContent"
      :repo-content="repoContent"
    />

    <readme
      v-if="readme"
      :readme="readme"
    />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RepositoryHeader from '@/components/RepositoryHeader'
import MenuUserRepoList from '@/components/MenuUserRepoList'
import FileExplorer from '@/components/FileExplorer'
import Readme from '@/components/Readme'
import { getRepository, getRepositoryContent, getRepositoryLanguage, getRepositoryReadme } from '../api/repositories'

export default {
  name: 'RepoDetail',
  components: {
    RepositoryHeader,
    MenuUserRepoList,
    FileExplorer,
    Readme
  },
  data () {
    return {
      repoContent: null,
      detail: {},
      languages: null,
      readme: null
    }
  },
  computed: {
    ...mapGetters([
      'currentUserRepositories',
      'currentUser'
    ]),
    // Sum total bytes per language
    totalBytesLanguages () {
      return Object.values(this.languages).reduce((accumulator, current) => {
        return accumulator + current
      }, 0)
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    ...mapActions([
      'loadUserRepositories',
      'loadUser'
    ]),
    fetchData () {
      this.loadUser(this.$route.params.user)
      this.loadUserRepositories(this.$route.params.user)

      // ok
      getRepository(this.$route.params.user, this.$route.params.repository).then(detailData => {
        this.detail = detailData
      })
      getRepositoryLanguage(this.$route.params.user, this.$route.params.repository).then(languagesData => {
        this.languages = languagesData
      })
      getRepositoryReadme(this.$route.params.user, this.$route.params.repository).then(readmeData => {
        this.readme = readmeData
      })
      getRepositoryContent(this.$route.params.user, this.$route.params.repository).then(repoContentData => {
        this.repoContent = repoContentData
      })
    },
    bytesPerLanguagePercentage (nbBytes, total) {
      return Math.round(nbBytes / total * 100)
    }
  }
}
</script>

<style scoped>
main > .mdl-layout__tab-panel {
  padding: 8px;
  padding-top: 48px;
}
</style>
