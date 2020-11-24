<template>
    <b-col>
        <h1><BIconPersonSquare font-scale="2"/></h1>
        <h1>{{ this.username }}</h1>
        <h2 class="text-muted">{{ this.email }}</h2>
    </b-col>
</template>

<script>
import BIconPersonSquare from 'bootstrap-vue';

export default {
  name: 'Account',
  components: [BIconPersonSquare],
  data() {
    return {
      username: '',
      email: '',
      persona: '',
    };
  },
  mounted() {
    this.username = this.$route.query.name;
    this.email = this.$route.query.email;
    this.persona = this.$route.query.persona;
  },
  watch: {
    $route(to) {
      this.username = to.query.name;
    },
  },
};
</script>
