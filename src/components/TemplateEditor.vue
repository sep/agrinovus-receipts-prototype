<template>
  <b-container>
    <form-wizard
      :title="wizardTitle"
      :subtitle="wizardDescription"
      color="#3E92CC">
      <tab-content title="Select a Template" icon="ti ti-image">
        <select-ticket-template />
      </tab-content>

      <tab-content title="Mark Regions" icon="ti ti-pencil-alt">
        Select the template regions
      </tab-content>

      <tab-content title="Finish" icon="ti ti-check">
        Finish editing template
      </tab-content>
    </form-wizard>
  </b-container>
</template>

<script>
import SelectTicketTemplate from '@/components/TemplateEditor/SelectTicketTemplate.vue';

export default {
  components: { SelectTicketTemplate },
  name: 'TemplateEditor',

  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/@icon/themify-icons/themify-icons.css',
      },
    ],
  },

  data() {
    return {
      wizardTitle: 'Create or Edit a Ticket Template',
      wizardDescription:
        'Templates help us process the contents of a ticket. '
        + 'The process is simple. Just select an image and draw a box around '
        + 'the different fields of the invoice. That\'s it. We\'ll take it from there.',
      templates: [],
      canvas: null,
    };
  },

  mounted() {
    this.templates = localStorage.getItem('ticketTemplates') || [];
  },

  methods: {
  },
};
</script>
