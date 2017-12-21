<template>
  <div id="welcome">

    <div class="welcome-section">
      <div class="welcome-section-search">
        <h1>GitVub</h1>

        <p class="description"><a href="https://github.com" target="_blank">GitHub</a> + <a href="https://vuejs.org/" target="_blank">Vue.js</a> =
          <router-link :to="{ name: 'RepoDetail', params: { user: 'maxpou', repository: 'gitvub' }}">GitVub</router-link></p>

        <div class="search-box mdl-shadow--2dp">
          <div class="search-text mdl-textfield mdl-js-textfield">
            <input
              v-model="userSearch"
              @keyup.enter="proceedUserRepo()"
              class="mdl-textfield__input"
              type="text"
              id="search-user">
            <label class="mdl-textfield__label" for="search-user">search user...</label>
          </div>
          <button
            class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect"
            :disabled="!canProceed"
            @click="proceedUserRepo()">
            <i class="material-icons">search</i>
          </button>
        </div>
      </div>
    </div>

    <!-- <hr>
    <p>
      Our favorites users:
      <router-link
        v-for="(favorite, index) in favorites"
        :key="index"
        :to="{ name: 'UserRepoList', params: { user: favorite }}"
        class="badge badge-primary"
      >@{{ favorite }}</router-link>
    </p> -->

  </div>
</template>

<script>
// https://material.io/guidelines/components/text-fields.html#text-fields-field-variations --> Solo fields
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
      if (this.canProceed) {
        this.$router.push({name: 'UserRepoList', params: { user: this.userSearch }})
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  color: #424242;
  margin-bottom: 0px;
}

.description {
  font-style: italic;
}

.description > a {
  color: #424242;
  text-decoration: none;
}

.main_search {
  background-color: white;
  border-radius: 2px;
  border: 3px;
  padding: 8px;
}

.search-box {
  background-color: white;
  border-radius: 3px;
  border: 3px;
  padding: 8px;
}

.search-text {
  width: 80%;
  padding: 0;
}
.search-text > label:after {
  bottom: 0px;
}

.welcome-section {
  text-align: center;
}

.mdl-textfield__label {
  top: 0;
}

.welcome-section-search {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 200px 16px 0 16px;
}
</style>
