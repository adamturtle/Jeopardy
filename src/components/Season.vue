<template>
    <div class="container">
        <h1>Season {{ $route.params.season_id }}</h1>
        <table class="table table-striped table-hover table-bordered">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Note</th>
            </tr>
            <tr v-for="episode in data">
                <td><a v-link="{ name: 'game', params: { game_id: episode.id }}">{{ episode.name }}</a></td>
                <td>{{ episode.description }}</td>
                <td>{{ episode.note }}</td>
            </tr>
        </table>
    </div>

</template>
<script>
import Season32 from './../stores/season32.json'
export default {
    name: 'Season',
    data () {
        return {
            data: Season32
        }
    }
}
</script>
<style lang="scss" scoped>
</style>