<template>
  <grid :data="data"></grid>
</template>

<script>
import Grid from '@/components/Grid';

export default {
  name: 'result',
  components: {
    Grid
  },
  data() {
    return {
      data: {
        body: [{
          name: 'godking',
          title: 'SE',
          age: 40,
          company: '<a href="www.baidu.com">Baidu</a>'
        }, {
          name: 'oceansky',
          title: 'QA',
          age: 25
        }, {
          name: 'tester',
          title: 'admin',
          age: 20
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
