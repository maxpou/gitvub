<template>
  <div class="repoList">
    <menu-nav-bar/>
    <h2>{{ currentUser }}</h2>

    <div class="card-columns">
      <repo-list-item
        v-for="(repository, index) in currentUserRepositories" :key="index"
        :repository="repository"
      ></repo-list-item>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import MenuNavBar from '@/components/MenuNavBar'
import RepoListItem from '@/components/RepoListItem'

export default {
  name: 'RepoList',
  components: {
    MenuNavBar,
    RepoListItem
  },
  computed: {
    ...mapState({
      currentUser: state => state.repositories.currentUser
    }),
    ...mapGetters([
      'currentUserRepositories'
    ])
  },
  watch: {
    '$route': 'fetchData'
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
