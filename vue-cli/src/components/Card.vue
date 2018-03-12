<template>
    <div class="card-container">
        <div class="card-detail" v-if="name">
            <div><router-link v-bind:to="{path: '/card/' + id}">{{name}}</router-link></div>
            <div>{{title}}</div>
            <div>{{skills}}</div>
            <div v-if="hobbies.length > 0">
                <div>Hobbies:</div>
                <div v-for="hobby in hobbies" v-bind:key="hobby">
                    <div>{{hobby}}</div>
                </div>
            </div>
        </div>
        <div class="card-not-found" v-if="!name">
            <h2>Card Not Found</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: {
            id: {
                type: String
            },
            name: {
                type: String,
                default: 'GODKING'
                // required: true
            },
            title: {
                type: String,
                default: 'SE'
                // required: true
            },
            skills: {
                type: String,
                default: 'Javascript'
                // required: true
            },
            hobbies: {
                type: Array,
                default: function() {
                    return []
                },
                required: false
            }
        }, // use to pass data in
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    .card-container {
        margin: 10px;
        border: solid 2px purple;
    }
</style>
