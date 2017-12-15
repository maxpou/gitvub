<template>
  <div class="profile">
    <div class="row panel">
      <div class="col-md-4 col-sm-4">
        <img
          :src="user.avatar_url"
          class="img-thumbnail rounded float-left"
          :alt="user.login">
      </div>
      <div class="profile__content col-md-8 col-sm-8 col-xs-12">
        <h2>{{ user.name }}</h2>
        <p class="lead">{{ user.login }}</p>

        <blockquote class="blockquote bio">
          <p class="mb-0">{{ user.bio }}</p>
        </blockquote>

        <div class="row">
          <div class="col-sm">
            <ul class="list-unstyled">
              <li v-if="user.blog">🌐 <a :href="user.blog">{{ user.blog }}</a></li>
              <li v-if="user.email">✉️ {{ user.email }}</li>
              <li v-if="user.location">📍 {{ user.location }}</li>
              <li v-if="user.company">🏢 {{ user.company }}</li>
            </ul>
          </div>
          <div class="col-sm">
            <ul class="list-unstyled">
              <li>Followers: {{ user.followers }}</li>
              <li>Following: {{ user.following }}</li>
              <li>Public repositories: {{ user.public_repos }}</li>
              <li>Public gists: {{ user.public_gists }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.profile {
  margin-top: 20px;
  margin-bottom: 20px;
}
.profile__content {
  text-align: left;
}
.bio {
  font-style: italic;
  font-size: 1rem;
}
</style>
