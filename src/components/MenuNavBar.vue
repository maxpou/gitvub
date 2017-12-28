<template>
  <header class="mdl-layout__header"
    v-bind:class="[['Welcome'].indexOf($route.name) === -1 ? 'mdl-color--grey-800' : 'mdl-layout__header--transparent']">
    <div class="mdl-layout__header-row">
      <router-link
        :to="{ name: 'Welcome' }"
        tag="span"
        class="mdl-layout-title"
      >GitVub</router-link>
      <div class="mdl-layout-spacer"></div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
        <label
          class="mdl-button mdl-js-button mdl-button--icon"
          for="waterfall-exp">
          <i class="material-icons">search</i>
        </label>
        <div class="mdl-textfield__expandable-holder">
          <input
            v-model="userSearch"
            @keyup.enter="proceedUserRepo()"
            class="mdl-textfield__input"
            type="text"
            name="sample"
            id="waterfall-exp">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MenuNavBar',
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
        this.userSearch = ''
      }
    }
  }
}
</script>

<style scoped>
.mdl-layout-title {
  cursor: pointer;
  text-decoration: none;
}
</style>
