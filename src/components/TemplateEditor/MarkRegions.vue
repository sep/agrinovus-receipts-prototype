<template>
  <div id="mark-regions-container" class="mt-4 mb-4">
    <h5>Mark Regions</h5>

    <p>
      Hold the <b><i>Shift</i></b> key while clicking and dragging over the image to mark the
      different regions of the ticket.
    </p>

    <div>
      <canvas
        id="region-editor-canvas"
        class="canvas-style"
      >
      </canvas>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import RegionEditor from './region-editor';

export default {
  name: 'MarkRegions',
  data: () => ({
    editor: null,
  }),
  mounted() {
    this.editor = new RegionEditor();
    this.editor.bindToCanvas('region-editor-canvas', 'template-editor-container');
  },
  computed: {
    ...mapGetters({
      selectedTicket: 'templates/selectedTicket',
      newTemplateRegions: 'templates/newTemplateRegions',
    }),
    regions() { return this.editor.regions; },
  },
  methods: {
    ...mapMutations({
      setTemplateRegions: 'templates/setRegions',
    }),
  },
  watch: {
    selectedTicket(newTicket) {
      this.editor.setTicketUrl(newTicket);
    },
  },
};
</script>

<style scoped>
  .canvas-style {
    width: 100% !important;
    cursor: crosshair;
    border: 1px solid black;
    border-radius: 10px;
    display: block;
    overflow: hidden;
    box-shadow: 0 10px 8px -8px black;
  }
</style>
