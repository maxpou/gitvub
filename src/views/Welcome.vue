<template>
  <div id="welcome">

    <div class="welcome-section">
      <div class="welcome-section-search">
        <h1>GitVub</h1>

        <p class="description">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener">GitHub</a> +
          <a
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener">Vue.js</a> =
          <router-link
            :to="{ name: 'RepoDetail', params: { user: 'maxpou', repository: 'gitvub' }}">GitVub</router-link>
        </p>

        <div class="search-box mdl-shadow--2dp">
          <div class="search-text mdl-textfield mdl-js-textfield">
            <input
              id="search-user"
              v-model="userSearch"
              class="mdl-textfield__input"
              type="text"
              @keyup.enter="proceedUserRepo()">
            <label
              class="mdl-textfield__label"
              for="search-user">search user...</label>
          </div>
          <button
            :disabled="!canProceed"
            class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect"
            @click="proceedUserRepo()">
            <i class="material-icons">search</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// https://material.io/guidelines/components/text-fields.html#text-fields-field-variations --> Solo fields
export default {
  name: 'Welcome',
  data () {
    return {
      userSearch: ''
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
  color: #fff;
  margin-bottom: 0px;
  text-shadow: 0 0 10px #000;
}

.description {
  font-style: italic;
  text-shadow: 0 1px 2px #000;
  font-size: 1.2rem;
  color: #fff;
}

.description > a {
  text-decoration: none;
  color: #fff;
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

.welcome-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.welcome-section-search {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
</style>
