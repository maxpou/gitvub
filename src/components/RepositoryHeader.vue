<template>
  <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col">
      <div class="mdl-card__supporting-text">
        <h2><router-link :to="{ name: 'UserRepoList', params: { user: currentUser.login }}">{{ currentUser.login }}</router-link> / {{ repository.name }}</h2>
        <p>{{ repository.description }}</p>
        <span class="mdl-chip mdl-chip--contact">
          <span class="mdl-chip__contact"><i class="material-icons">star_rate</i></span>
          <span class="mdl-chip__text">{{ repository.stargazers_count }}</span>
        </span>
        <span class="mdl-chip mdl-chip--contact">
          <span class="mdl-chip__contact"><i class="material-icons">call_split</i></span>
          <span class="mdl-chip__text">{{ repository.forks_count }}</span>
        </span>
        <span class="mdl-chip mdl-chip--contact">
          <span class="mdl-chip__contact"><i class="material-icons">visibility</i></span>
          <span class="mdl-chip__text">{{ repository.watchers }}</span>
        </span>
        <span class="mdl-chip mdl-chip--contact">
          <span class="mdl-chip__contact"><i class="material-icons">bug_report</i></span>
          <span class="mdl-chip__text">{{ repository.open_issues_count }}</span>
        </span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'RepositoryHeader',
  props: {
    currentUser: {
      type: Object,
      default: () => {}
    },
    repository: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style scoped>
.section--center {
  width: 100%;
  margin-bottom: 48px;
}

h2 {
  margin: 0 0 24px;
}

h2 > a {
  color: #009688;
  text-decoration-line: none;
}
.mdl-chip__contact > .material-icons {
  padding-top: 4px;
  padding-left: 4px;
}

.mdl-card__supporting-text {
  width: calc(100% - 80px);
  margin: 40px;
  padding: 0;
}
</style>
