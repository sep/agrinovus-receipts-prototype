<template>
  <div>
    <b-row align-h="end"><b-button
      href="/ExampleCropTicketData.csv"
      download
      v-b-tooltip.hover title="Export your raw data to CSV"
      class="mx-3 float-right">
      <b-icon-file-earmark-bar-graph/> Export
    </b-button></b-row>
    <b-row>
      <template v-if="isSEPUser">
        <template v-if="persona == 'driver'">
          <iframe src="https://app.powerbi.com/reportEmbed?reportId=0933ae98-db2e-46f3-a1d3-8afec39ddb75&autoAuth=true&ctid=898f7683-8ab4-4a28-b74e-510b95f981eb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
        </template>
        <template v-else>
          <iframe src="https://app.powerbi.com/reportEmbed?reportId=a0a65da5-66f7-4fdf-bd5d-b0bdb79ce672&appId=0e73e868-885f-443f-9871-a5bf13d43213&autoAuth=true&ctid=898f7683-8ab4-4a28-b74e-510b95f981eb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
        </template>
      </template>
      <template v-else>
        <p class="text-muted text-center m-auto p-4" style="max-width:500px;">
          This Power BI dashboard was built using SEP's account.
          An interactive version is available only to users with an SEP login,
          so it has been replaced with screenshots for this proof of concept.
          All dashboards could be moved to a new Power BI account, making them
          available to all users as part of the commercialization plan.
        </p>
        <template v-if="persona == 'driver'">
          <img width="99%" src="@/assets/dashboard/driver.png"/>
        </template>
        <template v-else>
          <img width="99%" src="@/assets/dashboard/farmer-deliveries.png"/>
          <img width="99%" src="@/assets/dashboard/farmer-quality.png"/>
        </template>
      </template>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    persona() {
      return this.$store.state.user.persona;
    },
    isSEPUser() {
      return this.$store.state.user.email.includes('sep.com');
    },
  },
};
</script>

<style scoped>
iframe {
    max-width: 100%;
    width: 100%;
    height: -webkit-fill-available;
}
</style>
