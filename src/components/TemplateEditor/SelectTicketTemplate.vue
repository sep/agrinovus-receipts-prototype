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
            v-if="showNewTemplateForm"
            >
            <b-form-input
              id="ticket-template-name"
              placeholder="Enter a name for the template"
              @input="setNewTemplateName"
              required
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
              v-bind:key="ticket.pathLong"
              v-bind:class="{ 'bg-primary': ticket.pathLong === selectedTicket }"
              v-on:click="setNewTemplateTicket(ticket)"
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
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SelectTicketTemplate',

  data: () => ({
    showNewTemplateForm: true,
  }),

  computed: {
    ...mapGetters({
      existingTickets: 'tickets/existingTickets',
      hasExistingTemplates: 'templates/hasExistingTemplates',
      existingTemplates: 'templates/existingTemplates',
      selectedTicket: 'templates/selectedTicket',
    }),
  },

  created() {
    this.fetchStaticTickets();
    this.fetchUploadedTickets();
    this.fetchSavedTemplates();
  },

  methods: {
    ...mapActions({
      fetchStaticTickets: 'tickets/fetchStaticTickets',
      fetchUploadedTickets: 'tickets/fetchUploadedTickets',
      fetchSavedTemplates: 'templates/fetchSavedTemplates',
    }),

    ...mapMutations({
      setNewTemplateName: 'templates/setNewTemplateName',
      setNewTemplateTicket: 'templates/setNewTemplateTicket',
      addRegion: 'templates/addRegion',
      addTemplate: 'templates/addTemplate',
      setExistingTemplates: 'templates/setExistingTemplates',
    }),
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
