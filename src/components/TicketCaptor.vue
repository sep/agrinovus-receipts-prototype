<template>
  <b-container>
    <b-alert
      class="fixed-top"
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged">Ticket uploaded successfully.</b-alert>
    <b-row align-h="center">
      <div class='col-md-6'>
        <p><b-icon-geo-alt/> {{this.location}}</p>
        <b-img v-if='this.img' :src='this.img' fluid/>
        <web-cam
          :hidden="img"
          ref='webcam'
          height='100%'
          :device-id='deviceId'
          @cameras='onCameras'
          @camera-change='onCameraChange'
        />

        <b-row class='actions' align-h="center">
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
  </b-container>
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
      dismissSecs: 3,
      dismissCountDown: 0,
      location: '',
    };
  },
  computed: {
    device() {
      return this.devices.find((n) => n.deviceId === this.deviceId);
    },
  },
  mounted() {
    this.saveCurrentLocation();
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
      const serializedImage = localStorage.getItem('uploadedImages');
      const images = JSON.parse(serializedImage) || [];
      const imageToSave = {
        pathLong: this.img,
        pathShort: images.length + 1,
        name: this.location,
      };
      images.push(imageToSave);
      localStorage.setItem('uploadedImages', JSON.stringify(images));

      this.img = null;
      this.showAlert();
    },
    onCancel() {
      this.img = null;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    saveCurrentLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.$http
          .get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=grain%20elevator&inputtype=textquery&fields=name&locationbias=circle:200@${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAe_itPE6fHbm8d9FWOfHercVThIN9LHvE`)
          .then((response) => {
            const possibleBusinesses = response.data.candidates;
            if (possibleBusinesses.length > 0) {
              this.location = possibleBusinesses[0].name;
            }
          });
      });
    },
  },
};
</script>

<style scoped>
.actions {
  position: fixed;
  bottom: 1em;
  width: 100%;
  margin-left: -24px;
}
</style>
