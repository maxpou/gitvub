<template>
  <section class="section--center mdl-card mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
    <div class="mdl-card__media mdl-cell mdl-cell--3-col-tablet">
      <img
        :src="user.avatar_url"
        class="user_avatar"
        :alt="user.login">
    </div>
    <div class="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet">
      <div class="mdl-card__supporting-text">
        <h4 v-if="user.name" class="user-name">{{ user.name }} - @{{ user.login }}</h4>
        <h4 v-else class="user-name">@{{ user.login }}</h4>
        <p>{{ user.bio }}</p>
        <div class="mdl-grid mdl-grid--no-spacing">
          <div class="mdl-cell">
            <ul class="list-unstyled">
              <li v-if="user.blog">🌐 <a :href="user.blog">{{ user.blog }}</a></li>
              <li v-if="user.email">✉️ {{ user.email }}</li>
              <li v-if="user.location">📍 {{ user.location }}</li>
              <li v-if="user.company">🏢 {{ user.company }}</li>
            </ul>
          </div>
          <div class="mdl-cell">
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
  </section>
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
.section--center {
  width: 100%;
  margin-bottom: 48px;
}

h4.user-name {
  margin-top: 0;
}

section > header,
.mdl-card__media {
  background-color: #ffffff;
}

.user_avatar {
  width: 100%;
  height: auto;
}

.mdl-card__supporting-text {
  width: calc(100% - 32px);
}

.list-inline,
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
</style>
