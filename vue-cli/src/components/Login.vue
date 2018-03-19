<template>
    <div class="login-container">
        <form class="login-form">
            <label for="username">User Name:</label>
            <input type="text" id="#username" v-model.lazy.trim="userName">
            <label for="password">Password:</label>
            <input type="password" id="#password" v-model.lazy.trim="password">
            <button v-on:click.prevent="login()">Login</button>
        </form>
    </div>
</template>
<script>

import AuthSvr from '@/services/authService'

export default {
    data () {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        login () {
            return AuthSvr.logIn(this.userName, this.password)
                .then(response => {
                    console.log(response);
                    this.$router.push({path: this.$route.query.redirect})
                })
                .catch(error => {
                    window.localStorage.setItem('isLoggedIn', 'false')
                })
        }
    }
}
</script>
<style lang="scss" scoped>
    .login-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100wh;
        height: 100vh;

        .login-form{
            display: flex;
            flex-direction: column;
        }
    }

</style>


