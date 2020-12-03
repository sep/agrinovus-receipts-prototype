<template>
  <b-container>
    <form-wizard
      title=""
      subtitle=""
      color="#3E92CC"
      @on-complete="onComplete">
      <tab-content
        title="Select a Template"
        icon="ti ti-image"
        :beforeChange="readyToMarkRegions"
        >
        <select-ticket-template />
      </tab-content>

      <tab-content
        title="Mark Regions"
        icon="ti ti-pencil-alt"
        >
        <mark-regions />
      </tab-content>

      <tab-content title="Finish" icon="ti ti-check">
        Click "Finish" to apply template to existing tickets,
        and enable it to be run automatically against future tickets.
      </tab-content>
    </form-wizard>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import SelectTicketTemplate from '@/components/TemplateEditor/SelectTicketTemplate.vue';
import MarkRegions from '@/components/TemplateEditor/MarkRegions.vue';

export default {
  components: { SelectTicketTemplate, MarkRegions },
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
      templates: [],
      canvas: null,
    };
  },

  mounted() {
    this.templates = localStorage.getItem('ticketTemplates') || [];
  },

  methods: {
    ...mapGetters({
      readyToMarkRegions: 'templates/readyToMarkRegions',
    }),
    onComplete() {
      this.$router.push({ name: 'tickets' });
    },
  },
};
</script>
