<template>
  <b-container>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Email address:" label-align="left" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your Name:" label-align="left" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your role:" label-align="left" label-for="btn-radios-1">
        <b-form-radio-group
                id="btn-radios-1"
                v-model="form.persona"
                buttons
                required
                name="radios-btn-default"
                button-variant="outline-secondary"
            >
            <b-form-radio value="driver"><b-icon-truck/><br><span>Driver</span></b-form-radio>
            <b-form-radio value="farmer"><b-icon-sun/><br><span>Farmer</span></b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-button type="submit" variant="primary" block>Sign Up</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'LogIn',
  data() {
    return {
      form: {
        email: '',
        name: '',
        persona: '',
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

      this.setPersona(this.form.persona);
      this.setName(this.form.name);
      this.setEmail(this.form.email);

      this.$router.push({ name: 'account' });
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = '';
      this.form.name = '';
      this.form.persona = '';
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
