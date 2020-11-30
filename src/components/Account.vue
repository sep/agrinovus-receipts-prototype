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
        <b-input-group :prepend="`${persona == 'driver' ? 'Farmer' : 'Driver'}`">
          <b-form-input id="driver-field"></b-form-input>
          <b-input-group-append>
            <b-button variant="info" @click="onAddDriver">
              <b-icon-plus-square/>
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <template v-for="account in accounts">
          <div :key="account.guid">
            <b-icon-truck v-if="persona == 'farmer'"/>
            <b-icon-sun v-else/>
            {{ account.name }}
          </div>
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
      accounts: [],
    };
  },
  computed: {
    accountId() {
      return new Chance().guid();
    },
    username() {
      return this.$store.state.name;
    },
    email() {
      return this.$store.state.email;
    },
    persona() {
      return this.$store.state.persona;
    },
  },
  mounted() {
    this.accounts = JSON.parse(localStorage.getItem('accounts'));
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

      const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      accounts.push(newDriver);
      localStorage.setItem('accounts', JSON.stringify(accounts));

      this.accounts = accounts;
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
