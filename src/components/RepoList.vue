<template>
  <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col">
      <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
        <h4>Repositories</h4>

        <div
          v-for="(repository, index) in repositories"
          :key="index"
          class="section__text mdl-cell mdl-cell--12-col">

          <router-link
            :to="{ name: 'RepoDetail', params: { user: repository.owner.login, repository: repository.name }}"
            tag="h5"
          >{{ includeOwner ? repository.full_name : repository.name }}</router-link>

          <p>{{ repository.description }}</p>
          <span
            v-if="repository.language"
            class="mdl-chip">
            <span class="mdl-chip__text">{{ repository.language }}</span>
          </span>
          <span
            v-if="repository.license"
            class="mdl-chip mdl-chip--contact">
            <span class="mdl-chip__contact"><i class="material-icons">gavel</i></span>
            <span class="mdl-chip__text">{{ repository.license.spdx_id }}</span>
          </span>
          <span
            v-if="repository.forks_count"
            class="mdl-chip mdl-chip--contact">
            <span class="mdl-chip__contact"><i class="material-icons">call_split</i></span>
            <span class="mdl-chip__text">{{ repository.forks_count }}</span>
          </span>
          <span
            v-if="repository.stargazers_count"
            class="mdl-chip mdl-chip--contact">
            <span class="mdl-chip__contact"><i class="material-icons">star_rate</i></span>
            <span class="mdl-chip__text">{{ repository.stargazers_count }}</span>
          </span>
        </div>
        <div
          v-if="repositories.length === 0"
          class="section__text mdl-cell mdl-cell--12-col">
          <h5>This user doesn't have any repositories.</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RepoList',
  props: {
    repositories: {
      type: Array,
      default: () => []
    },
    includeOwner: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
h5 {
  cursor: pointer;
  color: #009688;
}

.mdl-chip__contact > .material-icons {
  padding-top: 4px;
  padding-left: 4px;
}

.section__text:not(:last-child) {
  padding-top: 8px;
  padding-bottom: 8px;
}

.section__text:not(:last-child) {
  border-bottom: 1px solid rgba(0,0,0,.13);
}

.section__text > h5 {
  margin-top: 10px;
}

.mdl-card {
  min-height: 220px;
}
</style>
