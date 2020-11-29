<template>
  <div class="mt-4 mb-4">
    <!-- Create a new template -->
    <div>
      <h4>Create a new template</h4>

      <br>

      <!-- Template Name -->
      <b-row>
        <b-col>
          <b-form-group
            id="ticket-template-name-group"
            label="Template Name:"
            label-for="ticket-template-name"
            label-align="left"
            v-if="newTemplate.show"
            >
            <b-form-input
              id="ticket-template-name"
              v-model="newTemplate.name"
              required
              placeholder="Enter a name for the template"
              trim
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <br>

      <!-- Template Ticket Image -->
      <b-row>
        <b-col>
          <h6 class="float-left">Select a ticket:</h6>
          <div class="clearfix"></div>
          <div class="float-left d-flex d-flex-row">
            <div
              v-for="ticket in existingTickets"
              v-bind:key="ticket.pathShort"
              v-bind:class="{ 'bg-primary': ticket.active }"
              v-on:click="markTicketAsSelected(ticket)"
            >
              <img
                class="m-2"
                width="200"
                height="200"
                :src="ticket.pathLong"
                :alt="ticket.pathShort"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </div>

    <!-- Divider -->
    <div class="row" v-if="hasExistingTemplates">
      <div class="col"><hr /></div>
      <div class="col-auto">OR</div>
      <div class="col"><hr /></div>
    </div>

    <!-- Select existing template -->
    <div v-if="hasExistingTemplates">
        <h5>Select an existing template</h5>
        <div>
          <b-list-group v-for="item in existingTemplates" :key="item.name">
            <b-list-group-item>{{item.name}}</b-list-group-item>
          </b-list-group>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectTicketTemplate',

  data: () => ({
    existingTemplates: [],
    newTemplate: {
      name: '',
      ticketImage: undefined,
      show: true,
    },
    existingTickets: [],
  }),

  computed: {
    hasExistingTemplates() {
      return this.existingTemplates.length > 0;
    },
  },

  mounted() {
    this.existingTemplates = this.existingTicketTemplates();

    const staticImages = require.context('@/assets/tickets/', true, /\.png$/);
    this.importContext(staticImages);

    const uploadedImages = JSON.parse(localStorage.getItem('uploadedImages'));
    this.importArray(uploadedImages);
  },

  methods: {
    existingTicketTemplates() {
      const serializedTemplates = localStorage.getItem('ticketTemplates');

      if (serializedTemplates === null || serializedTemplates === undefined) {
        return [];
      }

      const savedTemplates = JSON.parse(serializedTemplates);

      return savedTemplates.ticketTemplates || [];
    },

    importContext(r) {
      r.keys().forEach((key, index) => (this.existingTickets.push({
        pathLong: r(key),
        pathShort: key,
        active: index === 0,
      })));
    },

    importArray(images) {
      images.forEach((path, index) => this.existingTickets.push({
        pathLong: path,
        pathShort: index,
        active: index === 0,
      }));
    },

    markTicketAsSelected(selectedTicket) {
      this.existingTickets = this.existingTickets.map((ticket) => {
        const active = ticket.pathLong === selectedTicket.pathLong;
        return { ...ticket, active };
      });

      const ticketImage = selectedTicket.pathLong;
      this.newTemplate = { ...this.newTemplate, ticketImage };
    },
  },
};
</script>

<style scoped>
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
</style>
