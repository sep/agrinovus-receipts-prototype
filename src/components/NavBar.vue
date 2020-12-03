<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">Ticket Booth</b-navbar-brand>

    <b-navbar-toggle target="sidebar"></b-navbar-toggle>
    <side-bar/>

    <b-collapse is-nav>
      <b-navbar-nav v-if="persona">
        <b-nav-item to="/tickets">Tickets</b-nav-item>
        <b-nav-item to="/templates">Templates</b-nav-item>
        <b-nav-item to="/stats">Stats</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" right>
        <b-nav-item-dropdown right no-caret v-if="persona == 'farmer'">
            <template #button-content>
              <b-icon-bell-fill/><sup><b-badge pill variant="light">2</b-badge></sup>
            </template>
            <b-dropdown-header>Notifications</b-dropdown-header>
            <b-dropdown-text style="width:max-content;">
              <small><b-icon-credit-card/> Bunge missing payment</small>
            </b-dropdown-text>
            <b-dropdown-text style="width:max-content;">
              <small><b-icon-minecart-loaded/> Ingredion contract fulfilled</small>
            </b-dropdown-text>
        </b-nav-item-dropdown>
        <b-nav-item to="/signup" v-if="!persona"><b-icon-person-fill/> Sign Up</b-nav-item>
        <template v-else>
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-icon-person-fill/>
            </template>
            <b-dropdown-item to="/account">Account</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapMutations } from 'vuex';
import SideBar from '@/components/NavBar/SideBar.vue';

export default {
  name: 'NavBar',
  components: { SideBar },
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
