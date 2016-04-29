<template>
    <div class="container">
        <h1>All Seasons</h1>
        <table class="table table-striped table-hover table-bordered">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Note</th>
            </tr>
            <tr v-for="season in data">
                <td>
                    <a v-link="{ name: 'season', params: { season_id: season.id }}">
                    {{ season.name }}</a>
                </td>
                <td>{{season.description}}</td>
                <td>{{season.note}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    import Alert from './../../node_modules/vue-strap/src/Alert'
    import Seasons from './../stores/seasons.json'
    export default {
        name: 'Seasons',
        components: {
            Alert
        },
        data () {
            return {
                data: Seasons
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>