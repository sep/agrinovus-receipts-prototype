<template>
  <b-container class="account-container">
    <b-row class="m-5">
      <b-col>
        <img
          class="m-2 rounded"
          width="150"
          height="150"
          src="@/assets/profile.jpg"
        />
        <h2>{{ this.username }}</h2>
        <h3 class="text-muted">{{ this.email }}</h3>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col>
        <b-form-group
          :label="`Find a ${this.linkedAccountType}`"
          label-align="left"
          label-for="input-1">
          <b-form-input
            id="input-1"
            placeholder="Search"
            autocomplete="off"
            v-model="searchCriteria"
            @input="onAccountLinkChange"
            required
          ></b-form-input>
        </b-form-group>
        <label for="linked-accounts" class="label text-left">Your {{ linkedAccountType }}s:</label>
        <div id="linked-accounts" class="mx-auto">
          <template v-for="account in accounts">
            <div class="text-left" :key="account.guid">
              <b-icon-truck v-if="linkedAccountType == 'Driver'"/>
              <b-icon-sun v-else/>
              {{ account.name }}
            </div>
          </template>
        </div>
      </b-col>
    </b-row>
    <b-popover
      target="input-1"
      triggers="focus"
      placement="bottom"
      container="account-container"
      v-model="accountToLink">
      <b-row align-h="between">
      <b-col cols="auto" class="my-auto">
        <h6>{{ searchCriteria ? accountToLink : 'No search results' }}</h6>
      </b-col>
      <b-col cols="auto">
        <b-button v-if="searchCriteria" @click="onAddAccount" class="">Add</b-button>
      </b-col>
      </b-row>
    </b-popover>
  </b-container>
</template>

<script>
import Chance from 'chance';

export default {
  name: 'Account',
  data() {
    return {
      searchCriteria: '',
      accountToLink: '',
      accounts: [],
      chance: new Chance(),
    };
  },
  computed: {
    linkedAccountType() {
      return this.persona === 'driver'
        ? 'Farmer'
        : 'Driver';
    },
    username() {
      return this.$store.state.user.name;
    },
    email() {
      return this.$store.state.user.email;
    },
    persona() {
      return this.$store.state.user.persona;
    },
    searchResults() {
      return {
        html: true,
        content: this.accountToLink,
      };
    },
  },
  mounted() {
    this.accounts = JSON.parse(localStorage.getItem('accounts'));
  },
  methods: {
    onAddAccount() {
      const newAccount = {
        guid: this.chance.guid(),
        name: this.accountToLink,
      };

      const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      accounts.push(newAccount);
      localStorage.setItem('accounts', JSON.stringify(accounts));

      this.accounts = accounts;
      this.searchCriteria = null;
    },
    onAccountLinkChange(value) {
      const fakeLastName = this.chance.last({ nationality: 'en' });
      this.accountToLink = `${value} ${fakeLastName}`;
    },
  },
};
</script>

<style scoped>
.input-group {
  margin-bottom: 1em;
}
#linked-accounts {
  width: fit-content;
}
.label {
  width: 100%;
}
.popover {
  width: 100%;
  max-width: 100% !important;
}
.popover .arrow {
  display: none;
}
</style>
