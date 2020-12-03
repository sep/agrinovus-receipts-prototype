<template>
  <b-container>
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

    const serializedImageMap = localStorage.getItem('uploadedImages');
    const uploadedImages = JSON.parse(serializedImageMap);
    this.images.push(...uploadedImages);
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
  },
};
</script>
