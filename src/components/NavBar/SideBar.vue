<template>
  <b-sidebar id="sidebar" bg-variant="dark" text-variant="light" right backdrop shadow>
    <b-navbar-nav>
      <template v-if="persona">
        <b-nav-item to="/tickets">Tickets</b-nav-item>
        <b-nav-item to="/templates">Templates</b-nav-item>
        <b-nav-item to="/stats">Stats</b-nav-item>
      </template>

      <b-nav-item-dropdown right no-caret v-if="persona == 'farmer'">
        <template #button-content>
          Notifications <sup><b-badge pill variant="light">2</b-badge></sup>
        </template>
        <b-dropdown-text>
          <small><b-icon-credit-card/> Bunge missing payment</small>
        </b-dropdown-text>
        <b-dropdown-text>
          <small><b-icon-minecart-loaded/> Ingredion contract fulfilled</small>
        </b-dropdown-text>
      </b-nav-item-dropdown>

      <b-nav-item to="/signup" v-if="!persona"><b-icon-person-fill/> Sign Up</b-nav-item>
      <b-nav-item to="/account" v-if="persona">Account</b-nav-item>
    </b-navbar-nav>
    <template #footer>
      <b-navbar-nav v-if="persona">
        <b-nav-item @click="logout"><strong>Sign Out</strong></b-nav-item>
      </b-navbar-nav>
    </template>
  </b-sidebar>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'SideBar',
  computed: {
    persona() {
      return this.$store.state.user.persona;
    },
  },
  methods: {
    ...mapMutations({ clear: 'user/clear' }),
    logout() {
      this.clear();
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
