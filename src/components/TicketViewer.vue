<template>
  <div>
    <b-button to="/camera" v-b-tooltip.hover title="Add new ticket" class="mx-3 float-right">
      <b-icon-plus-circle/>
    </b-button>
    <b-form-group label="Group By">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        buttons
      ></b-form-radio-group>
    </b-form-group>
    <ticket-list-by-elevator v-if="selected == 0" :group-map="this.groupsByElevator">
    </ticket-list-by-elevator>
    <ticket-list-by-account v-if="selected == 1" :group-map="this.groupsByAccount">
    </ticket-list-by-account>
  </div>
</template>

<script>
import TicketListByElevator from '@/components/TicketListByElevator.vue';
import TicketListByAccountVue from './TicketListByAccount.vue';

export default {
  name: 'TicketViewer',
  components: {
    'ticket-list-by-elevator': TicketListByElevator,
    'ticket-list-by-account': TicketListByAccountVue,
  },
  data() {
    return {
      images: [],
      selected: 0,
      options: [
        { text: 'Elevator', value: 0 },
        { text: 'Account', value: 1 },
      ],
    };
  },
  computed: {
    linkedAccounts() {
      return this.$store.state.user.accounts;
    },
    groupsByElevator() {
      return this.images.reduce((map, obj) => {
        const groupName = obj.name;
        const group = map[groupName] || [];
        group.push(obj);
        // eslint-disable-next-line no-param-reassign
        map[groupName] = group;
        return map;
      }, {});
    },
    groupsByAccount() {
      return this.images.reduce((map, obj) => {
        const randomIndex = Math.floor(Math.random() * this.linkedAccounts.length);
        const randomAccount = this.linkedAccounts[randomIndex];
        const groupName = randomAccount.name;
        const group = map[groupName] || [];
        group.push(obj);
        // eslint-disable-next-line no-param-reassign
        map[groupName] = group;
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
