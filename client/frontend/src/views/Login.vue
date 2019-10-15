<template>
  <div class="home">
    <div>Login by third party OAuth account</div>
    <el-button type="primary" @click="onOAuthLogin">Login OAuth account</el-button>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    onOAuthLogin() {
      // open to oauth login page
      const redirectUri = encodeURIComponent('http://localhost:8080/#/oauth');
      window.location = `http://localhost:9999/oauth?clientid=my-client-app-id&resposne_type=code&redirect_uri=${redirectUri}`;
    }
  }
};
</script>
