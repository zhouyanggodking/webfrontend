<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    axios.post('/api/notify_code', {
      code: this.$route.query.code
    }).then((res) => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      this.$router.push('/')
    });
  }
};
</script>

<style lang="scss" scoped>

</style>
