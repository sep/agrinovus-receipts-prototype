<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">Ticket Booth</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="camera">Capture Ticket</b-nav-item>
        <b-nav-item to="tickets">View Tickets</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <em><BIconPersonFill/></em>
          </template>
          <b-dropdown-item to="login">Sign Up</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import BIconPersonFill from 'bootstrap-vue';

export default {
  name: 'NavBar',
  components: [BIconPersonFill],
};
</script>
