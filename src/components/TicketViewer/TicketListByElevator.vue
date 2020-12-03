<template>
  <b-container>
    <div class="accordion" role="tablist">
      <template v-for="(group, name, i) in groupMap">
        <b-card :key="i" no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1 text-left">
            {{name}}
            <b-link v-if="i == 1" class="float-right"><b-icon-minecart-loaded/> 90%</b-link>
          </b-card-header>
          <b-card-body>
            <b-card-group deck :key="i" v-for="(img, i) in group">
              <b-card img-left :img-src="img.pathLong" align="right">
                <b-card-text>
                  <b-row>
                    <b-col>{{ chance.date({string: true, year: 2020 }) }}</b-col>
                    <b-col>{{ chance.floating({ min: 800, max: 1000, fixed: 2 }) }} BU</b-col>
                    <b-col>
                      <b-badge class='mr-1' variant="danger" v-if="i%2 == 1">Not Processed</b-badge>
                      <b-badge variant="success" v-if="i % 3 == 0">Paid</b-badge>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-card-body>
        </b-card>
      </template>
    </div>
  </b-container>
</template>

<script>
import Chance from 'chance';

export default {
  name: 'TicketListByElevator',
  props: ['groupMap'],
  computed: {
    chance() {
      return new Chance();
    },
  },
};
</script>

<style scoped>
img {
  height: 100px;
}
</style>
