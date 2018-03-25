<template>
  <div v-if="data.length">
    <v-chart :force-fit="true"
    :height="400" :animate="false"
    :padding="[ 10, 40, 40, 40 ]"
    :data="data" :scale="scale">
      <v-tooltip :show-title="false"/>
      <v-axis :scale="[{dataKey: 'time', type: 'timeCat'}]"/>
      <!-- <v-legend :offset="20" /> -->
      <v-candle position="time*range" color="time"/>
    </v-chart>
  </div>
</template>

<script>
const scale = [{
  dataKey: 'time', type: 'timeCat', nice: false, range: [0, 1]
}];
export default {
  name: 'demoStock',
  data() {
    return {
      data: [{
        time: '2017-01-01',
        start: 8,
        end: 9,
        min: 7.4,
        max: 10,
        range: [8, 9, 10, 7.4] // [start, end, max, min]
      }, {
        time: '2017-01-02',
        start: 8,
        end: 9,
        min: 7.4,
        max: 10,
        range: [8, 9, 10, 7.4] // [start, end, max, min]
      }, {
        time: '2017-01-03',
        start: 8,
        end: 9,
        min: 7.4,
        max: 10,
        range: [8, 9, 10, 7.4] // [start, end, max, min]
      }],
      scale
    };
  }
};
</script>
