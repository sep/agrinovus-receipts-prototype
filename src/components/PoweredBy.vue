<template>
  <b-row class="footer m-0">
    <b-col class="pr-0 pt-1 text-right" style="line-height: 1;">powered<br>by</b-col>
    <b-col class="pl-0 text-left"><img width="150rem" src="@/assets/farmbureau.jpg"/></b-col>
  </b-row>
</template>

<script>
export default {
  name: 'PoweredBy',
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 3em;
  left: 0;
  width: 100%;
}
</style>
