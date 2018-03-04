<template>
  <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
    <div class="mdl-card mdl-cell mdl-cell--12-col">
      <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
        <h4>Users</h4>

        <div class="mdl-list">
          <div v-for="(user, index) in users"
          :key="index"
          class="mdl-list__item">
            <span class="mdl-list__item-primary-content">
              <router-link
                :to="{ name: 'UserRepoList', params: { user: user.login }}"
                tag="h5"
                >{{ user.login }}</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
h5 {
  cursor: pointer;
  color: #009688;
}
h4 {
  width: 100%;
}
.mdl-list__item {

}
</style>
