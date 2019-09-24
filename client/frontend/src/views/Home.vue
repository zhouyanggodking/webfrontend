<template>
  <div>
    HOME:
    <h2>username: {{username}}</h2>
    <h2>title:{{title}}</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      title: ''
    };
  },
  created() {
    axios.get('/api/user_info').then(res => {
      this.username = res.data.username;
      this.title = res.data.title;
    });
  }
};
</script>

<style lang="scss" scoped>

</style>
