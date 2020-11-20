<template>
  <div class='container'>
    <b-row>
      <div class='col-md-6 p-4'>
        <h1>Capture Ticket</h1>
        <web-cam
          ref='webcam'
          :device-id='deviceId'
          width='100%'
          @cameras='onCameras'
          @camera-change='onCameraChange'
        />

        <b-row>
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
            <b-button size="lg" variant="primary" @click='onCapture'>
              <b-icon icon="camera-fill" aria-label="Take picture"></b-icon>
            </b-button>
          </b-col>
          <b-col>
            <b-link @click='onSaveTickets'>
              <b-img :src='img' thumbnail fluid/>
            </b-link>
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
    onSaveTickets() {

    },
  },
};
</script>
