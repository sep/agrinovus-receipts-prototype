<template>
  <b-container>
    <h3 class='text-muted'>Tickets by Account</h3>
    <div class="accordion" role="tablist">
      <template v-for="(group, name, i) in groupMap">
        <b-card :key="i" no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1 text-left">
            {{name}}
          </b-card-header>
          <b-card-body>
            <b-card-group deck :key="i" v-for="(img, i) in group">
              <b-card img-left :img-src="img.pathLong" align="right">
                <b-card-text>
                  <b-row>
                    <b-col>{{ new Date().toDateString() }}</b-col>
                    <b-col>967.33 BU</b-col>
                    <b-col>
                      <b-badge class='mr-1' variant="primary" v-if="i%2 == 0">Processed</b-badge>
                      <b-badge variant="success">Paid</b-badge>
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
export default {
  name: 'TicketListByElevator',
  props: ['groupMap'],
};
</script>

<style scoped>
img {
  height: 100px;
}
</style>
