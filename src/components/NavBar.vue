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
        <b-nav-item to="/login" v-if="!persona"><BIconPersonFill/> Sign Up</b-nav-item>
        <b-nav-item to="/account" v-else><BIconPersonFill/></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import BIconPersonFill from 'bootstrap-vue';

export default {
  name: 'NavBar',
  components: [BIconPersonFill],
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
