<template>
  <div class="container">
    <div class="row">
      <div class="menu-right col-12 col-md-9">

        <div class="jumbotron">
          <h2><router-link :to="{ name: 'RepoList', params: { user: currentUser.login }}">{{ currentUser.login }}</router-link> / {{ currentRepository.detail.name }}</h2>
          <p
            class="lead"
            v-if="currentRepository.detail"><em>{{ currentRepository.detail.description }}</em></p>
          <p
          v-if="currentRepository.detail.homepage">
            <a
              :href="currentRepository.detail.homepage"
              target="_blank">{{ currentRepository.detail.homepage }}</a>
          </p>

          <div
            class="row"
            v-if="currentRepository.detail">
            <div class="col-sm">
              <ul class="list-unstyled">
                <li>🌟 {{ currentRepository.detail.stargazers_count }}</li>
              </ul>
            </div>
            <div class="col-sm">
              <ul class="list-unstyled">
                <li>⑂ {{ currentRepository.detail.forks_count }}</li>
              </ul>
            </div>
            <div class="col-sm">
              <ul class="list-unstyled">
                <li>👁 {{ currentRepository.detail.watchers }}</li>
              </ul>
            </div>
            <div class="col-sm">
              <ul class="list-unstyled">
                <li>🐞 {{ currentRepository.detail.open_issues_count }}</li>
              </ul>
            </div>
          </div>
        </div>

        <file-explorer
          v-if="repoContent"
          :repo-content="repoContent"
        />

        <readme
          :readme="currentRepository.readme"
        />

        <div
          class="detail"
          v-if="currentRepository.languages">
          <table class="table table-striped borderless-top">
            <tr>
              <th
                scope="col"
                colspan="2">Languages</th>
            </tr>
            <tbody v-if="totalBytesLanguages">
              <tr
                v-for="(bytes, language) in currentRepository.languages"
                :key="language">
                <td>{{ language }}</td>
                <td>{{ bytesPerLanguagePercentage(bytes, totalBytesLanguages) }}%</td>
              </tr>
            </tbody>
            <tr v-else>
              <td colspan="2"><em>No language found.</em></td>
            </tr>
          </table>
        </div>
      </div>

      <div class="repo-detail col-md-3 d-sm-none d-md-block">
        <menu-user-repo-list :repositories="currentUserRepositories"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MenuUserRepoList from '@/components/MenuUserRepoList'
import FileExplorer from '@/components/FileExplorer'
import Readme from '@/components/Readme'
import { getRepositoryContent } from '../api/repositories'

export default {
  name: 'RepoDetail',
  components: {
    MenuUserRepoList,
    FileExplorer,
    Readme
  },
  data () {
    return {
      repoContent: []
    }
  },
  computed: {
    ...mapGetters([
      'currentUserRepositories',
      'currentRepository',
      'currentUser'
    ]),
    // Sum total bytes per language
    totalBytesLanguages () {
      return Object.values(this.currentRepository.languages).reduce((accumulator, current) => {
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
      'loadRepositoryDetail',
      'loadUserRepositories',
      'loadUser'
    ]),
    async fetchData () {
      this.loadRepositoryDetail(this.$route.params)
      this.loadUser(this.$route.params.user)
      this.loadUserRepositories(this.$route.params.user)
      this.repoContent = await getRepositoryContent(this.$route.params.user, this.$route.params.repository)
    },
    bytesPerLanguagePercentage (nbBytes, total) {
      return Math.round(nbBytes / total * 100)
    }
  }
}
</script>

<style scoped>
.borderless td,
.borderless th {
  border: none;
}
.borderless-top th {
  border-top: 0;
}
</style>
