<template>
  <div>
    <b-button
      @click="downloadCSVData"
      v-b-tooltip.hover title="Export your raw data to CSV"
      class="mx-3 float-right">
      <b-icon-file-earmark-bar-graph/> Export
    </b-button>
    <template v-if="persona == 'driver'">
      <iframe src="https://app.powerbi.com/reportEmbed?reportId=0933ae98-db2e-46f3-a1d3-8afec39ddb75&autoAuth=true&ctid=898f7683-8ab4-4a28-b74e-510b95f981eb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
    </template>
    <template v-else>
      <iframe src="https://app.powerbi.com/reportEmbed?reportId=a0a65da5-66f7-4fdf-bd5d-b0bdb79ce672&appId=0e73e868-885f-443f-9871-a5bf13d43213&autoAuth=true&ctid=898f7683-8ab4-4a28-b74e-510b95f981eb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D" frameborder="0" allowFullScreen="true"></iframe>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    persona() {
      return this.$store.state.user.persona;
    },
  },
  methods: {
    downloadCSVData() {
      const csv = 'Test';

      const anchor = document.createElement('a');
      anchor.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;
      anchor.target = '_blank';
      anchor.download = 'raw.csv';
      anchor.click();
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
