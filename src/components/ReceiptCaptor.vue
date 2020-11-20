<template>
  <div class='container'>
    <div class='row'>
      <div class='col-md-6'>
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
    </div>
  </div>
</template>

<script>
import { WebCam } from 'vue-web-cam';

export default {
  name: 'ReceiptCaptor',
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
      const nextDevice = this.devices[currentIndex + 1];
      const prevDevice = this.devices[currentIndex - 1];
      if (nextDevice) {
        this.camera = nextDevice.deviceId;
        this.deviceId = nextDevice.deviceId;
      } else if (prevDevice) {
        this.camera = prevDevice.deviceId;
        this.deviceId = prevDevice.deviceId;
      }
    },
    onSaveTickets() {

    },
  },
};
</script>
