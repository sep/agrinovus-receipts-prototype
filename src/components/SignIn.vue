<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Username or email address" label-align="left" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password" label-align="left" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" block>Sign in</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex';
import Chance from 'chance';

export default {
  name: 'SignIn',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true,
    };
  },
  methods: {
    ...mapMutations({
      setPersona: 'user/setPersona',
      setName: 'user/setName',
      setEmail: 'user/setEmail',
    }),
    onSubmit(evt) {
      evt.preventDefault();
      const persona = this.form.email.includes('farmer') ? 'farmer' : 'driver';
      this.setPersona(persona);
      this.setName(new Chance().name({ nationality: 'en' }));
      this.setEmail(this.form.email);

      this.$router.push({ name: 'tickets' });
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = '';
      this.form.password = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
#btn-radios-1 {
    width: 100%;
}
</style>
