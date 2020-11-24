<template>
  <b-container>
    <b-row class="m-5">
      <b-col>
        <h1><b-icon-person-square font-scale="2" /></h1>
        <h2>{{ this.username }}</h2>
        <h3 class="text-muted">{{ this.email }}</h3>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <b-input-group prepend="Account ID">
          <b-form-input id="account-id" disabled :value="accountId" />
          <b-input-group-append>
            <b-button variant="info" @click="onCopy">
              <b-icon-files/>
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <b-input-group prepend="Driver">
          <b-form-input id="driver-field"></b-form-input>
          <b-input-group-append>
            <b-button variant="info" @click="onAddDriver">
              <b-icon-plus-square/>
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <template v-for="driver in drivers">
          <div :key="driver.guid"><b-icon-truck/> {{ driver.name }}</div>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Chance from 'chance';

export default {
  name: 'Account',
  data() {
    return {
      username: '',
      email: '',
      persona: '',
      drivers: [],
    };
  },
  computed: {
    accountId() {
      return new Chance().guid();
    },
  },
  mounted() {
    this.username = this.$route.query.name;
    this.email = this.$route.query.email;
    this.persona = this.$route.query.persona;
    this.drivers = JSON.parse(localStorage.getItem('drivers'));
  },
  watch: {
    $route(to) {
      this.username = to.query.name;
    },
  },
  methods: {
    onCopy() {
      navigator.clipboard.writeText(this.accountId);
    },
    onAddDriver() {
      const driverInput = document.getElementById('driver-field');
      const driverAccountGuid = driverInput.value;
      const newDriver = {
        guid: driverAccountGuid,
        name: new Chance().name({ nationality: 'en' }),
      };

      const drivers = JSON.parse(localStorage.getItem('drivers')) || [];
      drivers.push(newDriver);
      localStorage.setItem('drivers', JSON.stringify(drivers));

      this.drivers = drivers;
      driverInput.value = null;
    },
  },
};
</script>

<style scoped>
.input-group {
  margin-bottom: 1em;
}
</style>
