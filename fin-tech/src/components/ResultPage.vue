<template>
  <div>
    <grid :data="data"></grid>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import Grid from '@/components/Grid';
import BarChart from '@/components/BarChart';

export default {
  name: 'result',
  components: {
    Grid,
    BarChart
  },
  data() {
    return {
      data: {
        body: [{
          name: 'godking',
          title: 'SE',
          age: 40,
          company: '<a href="https://www.baidu.com">Baidu</a>'
        }, {
          name: 'oceansky',
          title: 'QA',
          age: 25,
          company: '<a href="https://www.google.com">Google</a>'
        }, {
          name: 'tester',
          title: 'admin',
          age: 20,
          company: '<a href="https://www.facebook.com">FaceBook</a>'
        }, {
          name: 'godking1',
          title: 'SE',
          age: 40,
          company: '<a href="https://www.baidu.com">Baidu</a>'
        }, {
          name: 'oceansky1',
          title: 'QA',
          age: 25,
          company: '<a href="https://www.google.com">Google</a>'
        }, {
          name: 'tester1',
          title: 'admin',
          age: 20,
          company: '<a href="https://www.facebook.com">FaceBook</a>'
        }],
        header: [{
          key: 'name',
          title: 'Name'
        }, {
          key: 'title',
          title: 'Title'
        }, {
          key: 'age',
          title: 'Age'
        }, {
          key: 'company',
          title: 'Company'
        }]
      }
    };
  }
};
</script>
