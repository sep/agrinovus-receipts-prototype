<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-5">
    <b-navbar-brand to="/">Ticket Booth</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/camera" v-if="persona == 'driver'">Capture Ticket</b-nav-item>
<<<<<<< HEAD
        <b-nav-item to="/tickets" v-if="persona">View Tickets</b-nav-item>
<<<<<<< HEAD
        <b-nav-item to="/dashboard" v-if="persona">Dashboard</b-nav-item>
=======
=======
        <b-nav-item to="/templates" v-if="persona === 'driver'">Manage Templates</b-nav-item>
        <b-nav-item to="/tickets">View Tickets</b-nav-item>
>>>>>>> 3ccb071... Added start of template page
>>>>>>> 3be7442... Added start of template page
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" right>
        <b-nav-item to="/login" v-if="!persona"><b-icon-person-fill/> Sign Up</b-nav-item>
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

export default {
  name: 'NavBar',
  computed: {
    persona() {
      return this.$store.state.persona;
    },
  },
  methods: {
    ...mapMutations(['clear']),
    logout() {
      this.clear();
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
