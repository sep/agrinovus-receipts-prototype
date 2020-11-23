<template>
  <div class='p-4'>
    <h1>View Tickets</h1>
    <b-card-group deck :key="img.pathShort" v-for="(img, i) in images">
        <b-card overlay :img-src="img.pathLong" align="right">
            <b-card-text>
                <b-badge class='mr-1' variant="primary" v-if="i % 2 == 0">Processed</b-badge>
                <b-badge variant="success">Paid</b-badge>
            </b-card-text>
        </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'TicketViewer',
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.importAll(require.context('@/assets/tickets/', true, /\.png$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
  },
};
</script>
