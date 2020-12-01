<template>
  <div class="mt-4 mb-4">
    <h5>Mark Regions</h5>
    <p>Click and drag over the image to mark the different regions of the ticket.</p>
    <div id="region-editor">
      <canvas id:="editor-canvas" class="canvas-style" v-on:mousedown="mouseDown" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarkRegions',
};
</script>

<style scoped>
  .canvas-style {
    cursor: crosshair;
    width: 100% !important;
    height: 550px !important;
    border: 2px solid black;
    border-radius: 10px;
    display: block;
    margin: auto;
    box-shadow: 0 10px 8px -8px black;
  }
</style>
