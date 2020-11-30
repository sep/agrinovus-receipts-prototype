<template>
  <b-container>
    <h2 class='text-muted'>Tickets by Elevator</h2>
    <div class="accordion" role="tablist">
      <template v-for="(group, name, i) in groupMap">
        <b-card :key="i" no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="`accordion-${i}`" variant="info">{{name}}</b-button>
          </b-card-header>
          <b-collapse
          :id="`accordion-${i}`"
          accordion="my-accordion"
          role="tabpanel"
          >
            <b-card-body>
              <b-card-group deck :key="i" v-for="(img, i) in group">
                <b-card overlay :img-src="img.pathLong" align="right">
                  <b-card-text>
                    <b-badge class='mr-1' variant="primary" v-if="i % 2 == 0">Processed</b-badge>
                    <b-badge variant="success">Paid</b-badge>
                  </b-card-text>
                </b-card>
              </b-card-group>
            </b-card-body>
          </b-collapse>
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
