<template>
    <div>
        <h1>Welcome to Vue Tutorial</h1>
        <router-link to="/cardlist">Go to Card List</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>

</style>
