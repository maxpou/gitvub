<template>
  <div class="jumbotron">

    <h1>GitVub</h1>

    <div class="input-group">
      <span class="input-group-addon" id="btnGroupAddon">🔎</span>
      <input type="text" v-model="userSearch" @keyup.enter="proceedUserRepo()"
        class="form-control" placeholder="search user..." aria-label="Input group example" aria-describedby="btnGroupAddon">
    </div>

    <button v-show="canProceed" type="button" class="btn btn-outline-info btn-block" @click="proceedUserRepo()">Search user</button>

    <hr>
    <p>
      Our favorites users:
      <router-link v-for="(favorite, index) in favorites" :key="index"
        :to="{ name: 'RepoList', params: { user: favorite }}"
        class="badge badge-primary"
      >@{{favorite}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      userSearch: '',
      favorites: ['maxpou', 'maxpou-slides', 'vuejs', 'yyx990803']
    }
  },
  computed: {
    canProceed () {
      return this.userSearch.length > 0
    }
  },
  methods: {
    proceedUserRepo () {
      this.$router.push({name: 'RepoList', params: { user: this.userSearch }})
    }
  }
}
</script>

<style scoped>
.btn {
  margin-top: 0.5rem;
}
.badge {
  margin-right: .25rem;
}
</style>


