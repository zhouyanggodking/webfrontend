<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-bar position="year*sales" />
    </v-chart>
  </div>
</template>

<script>
const data = [
  { year: '1951', sales: 38 },
  { year: '1952', sales: 52 },
  { year: '1956', sales: 61 },
  { year: '1957', sales: 145 },
  { year: '1958', sales: 48 },
  { year: '1959', sales: 38 },
  { year: '1960', sales: 38 },
  { year: '1962', sales: 38 }
];

const scale = [{
  dataKey: 'sales',
  tickInterval: 20
}];

export default {
  name: 'barChart',
  data() {
    return {
      data,
      scale,
      height: 400
    };
  }
};
</script>
