<template>
  <div class='container p-4'>
    <b-row>
      <div class='col-md-6'>
        <h1>Capture Ticket</h1>
        <b-img v-if='this.img' :src='this.img' fluid/>
        <web-cam
          :hidden="img"
          ref='webcam'
          height='100%'
          :device-id='deviceId'
          @cameras='onCameras'
          @camera-change='onCameraChange'
        />

        <b-row class='actions'>
          <b-col>
            <b-button
              :disabled='this.devices.length < 2'
              size="lg"
              variant="outline-secondary"
              @click='onShuffleCamera'>
              <b-icon icon="arrow-repeat" aria-label="Change Camera"></b-icon>
            </b-button>
          </b-col>
          <b-col>
            <b-button v-if='this.img' size="lg" variant="primary" @click='onSaveTicket'>
              <b-icon  icon="upload" aria-label="Save picture"></b-icon>
            </b-button>
            <b-button v-else size="lg" variant="primary" @click='onCapture'>
              <b-icon icon="camera-fill" aria-label="Take picture"></b-icon>
            </b-button>
          </b-col>
          <b-col>
            <b-button v-if='this.img' size="lg" variant="secondary" @click='onCancel'>
              <b-icon  icon="x" aria-label="Reurn to camera"></b-icon>
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-row>
  </div>
</template>

<script>
import { WebCam } from 'vue-web-cam';

export default {
  name: 'TicketCaptor',
  components: { WebCam },
  data() {
    return {
      img: null,
      camera: null,
      deviceId: null,
      devices: [],
    };
  },
  computed: {
    device() {
      return this.devices.find((n) => n.deviceId === this.deviceId);
    },
  },
  watch: {
    camera(id) {
      this.deviceId = id;
    },
    devices() {
      const first = this.devices[0];
      if (first) {
        this.camera = first.deviceId;
        this.deviceId = first.deviceId;
      }
    },
  },
  methods: {
    onCapture() {
      this.img = this.$refs.webcam.capture();
    },
    onCameras(cameras) {
      this.devices = cameras;
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
    },
    onShuffleCamera() {
      const currentIndex = this.devices.findIndex((n) => n.deviceId === this.deviceId);
      const nextIndex = (currentIndex + 1) % this.devices.length;
      const nextDevice = this.devices[nextIndex];
      if (nextDevice) {
        this.camera = nextDevice.deviceId;
        this.deviceId = nextDevice.deviceId;
      }
    },
    onSaveTicket() {
      const images = JSON.parse(localStorage.getItem('uploadedImages')) || [];

      images.push(this.img);

      localStorage.setItem('uploadedImages', JSON.stringify(images));

      this.img = null;
    },
    onCancel() {
      this.img = null;
    },
  },
};
</script>

<style scoped>
.actions {
  position: fixed;
  bottom: 1em;
  width: 100%;
}
</style>
