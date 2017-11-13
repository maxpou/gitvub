<template>
  <div class="container">
    <menu-nav-bar/>
    <div class="row">
      <div class="menu-right col-12 col-md-9">

        <div class="jumbotron">
          <h2><router-link :to="{ name: 'RepoList', params: { user: currentUser }}">{{ currentUser }}</router-link> / {{ currentRepositoryName }}</h2>
          <p class="lead" v-if="currentRepository"><em>{{ currentRepository.description}}</em></p>
        </div>

        <div v-if="repositoryDetail.readme" v-html="readmeMarkdown" class="detail readme"></div>

        <div class="detail" v-if="currentRepository">
          <table class="table borderless">
            <tr>
              <td>Stargazers</td>
              <td>{{ currentRepository.stargazers_count }}</td>
            </tr>
            <tr>
              <td>Forks</td>
              <td>{{ currentRepository.forks_count}}</td>
            </tr>
            <tr>
              <td>Issues</td>
              <td>{{ currentRepository.open_issues_count}}</td>
            </tr>
            <tr>
              <td>Watchers</td>
              <td>{{ currentRepository.watchers_count}}</td>
            </tr>
          </table>
        </div>

        <div class="detail" v-if="currentRepository">
          <table class="table table-striped borderless-top">
            <tr>
              <th scope="col" colspan="2">Languages</th>
            </tr>
            <tbody v-if="totalBytesLanguages">
              <tr v-for="(bytes, language) in repositoryDetail.languages" :key="language">
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
import marked from 'marked'

export default {
  name: 'RepoDetail',
  components: {
    MenuNavBar,
    MenuUserRepoList
  },
  computed: {
    ...mapState({
      currentUser: state => state.repositories.currentUser,
      currentRepositoryName: state => state.repositories.currentRepositoryName,
      repositoryDetail: state => state.repositories.repositoryDetail
    }),
    ...mapGetters([
      'currentUserRepositories',
      'currentRepository'
    ]),
    // Sum total bytes per language
    totalBytesLanguages () {
      return Object.values(this.repositoryDetail.languages).reduce((accumulator, current) => {
        return accumulator + current
      }, 0)
    },
    readmeMarkdown () {
      if (typeof this.repositoryDetail.readme.content === 'undefined') {
        return ''
      }
      const markdown = atob(this.repositoryDetail.readme.content)
      return marked(markdown)
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

<style scoped>
.borderless td,
.borderless th {
  border: none;
}
.borderless-top th {
  border-top: 0;
}
.readme {
  text-align: left;
}

div.readme >>> pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}
</style>

