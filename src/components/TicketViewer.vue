<template>
  <b-container>
    <h1>View Tickets</h1>
    <ticket-list-by-elevator :group-map="this.groupsByElevator"></ticket-list-by-elevator>
  </b-container>
</template>

<script>
import TicketListByElevator from '@/components/TicketListByElevator.vue';

export default {
  name: 'TicketViewer',
  components: {
    'ticket-list-by-elevator': TicketListByElevator,
  },
  data() {
    return {
      images: [],
    };
  },
  computed: {
    groupsByElevator() {
      return this.images.reduce((map, obj) => {
        const group = map[obj.name] || [];
        group.push(obj);
        // eslint-disable-next-line no-param-reassign
        map[obj.name] = group;
        return map;
      }, {});
    },
  },
  mounted() {
    const staticImages = require.context('@/assets/tickets/', true, /\.png$/);
    this.importContext(staticImages);

    const uploadedImages = JSON.parse(localStorage.getItem('uploadedImages')) || [];
    this.importArray(uploadedImages);
  },
  methods: {
    importContext(r) {
      const FILE_NAME_REGEX = /(.+)\/(.+)\.png$/;

      r.keys().forEach((key) => (this.images.push({
        pathLong: r(key),
        pathShort: key,
        name: key.replace(FILE_NAME_REGEX, '$2'),
      })));
    },
    importArray(images) {
      images.forEach((path, index) => this.images.push({
        pathLong: path,
        pathShort: index,
        name: 'Home',
      }));
    },
  },
};
</script>
