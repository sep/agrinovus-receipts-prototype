<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-5">
    <b-navbar-brand to="/">Ticket Booth</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/camera" v-if="persona == 'driver'">Capture Ticket</b-nav-item>
        <b-nav-item to="/tickets">View Tickets</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" right>
        <b-nav-item to="/login" v-if="!persona"><b-icon-person-fill/> Sign Up</b-nav-item>
        <b-nav-item to="/account" v-else><b-icon-person-fill/></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      persona: '',
      username: '',
    };
  },
  watch: {
    $route(to) {
      this.persona = to.query.persona;
      this.username = to.query.name;
    },
  },
};
</script>
