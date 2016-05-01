<template>
    <div class="game">

        <game-controls></game-controls>
        <br/><br/><br/>
        <div class="container">

            <div v-show="!game.round">
                <div v-show="!data.game_complete" class="alert alert-warning"><strong>Warning!</strong> This is an incomplete game. You can still play, but it won't be the full experience.</div>
                <h1 class="text-center">{{data.game_title}}</h1>
                <h4 class="text-center">{{data.game_comments}}</h4><br/>
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th> Jeopardy! Round</th>
                            <th># of Clues</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="i in 6"
                            :class="{warning: data['category_J_' + (i+1)].clue_count == 4, danger: data['category_J_' + (i+1)].clue_count &lt;= 3}">
                            <td class="category-name">{{data['category_J_' + (i+1)].category_name}}</td>
                            <td class="category-count">{{data['category_J_' + (i+1)].clue_count}} / 5</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-condensed">
                    <thead>
                        <tr>
                            <th>Double Jeopardy! Round</th>
                            <th># of Clues</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="i in 6"
                            :class="{warning: data['category_DJ_' + (i+1)].clue_count == 4, danger: data['category_DJ_' + (i+1)].clue_count &lt;= 3}">
                            <td class="category-name">{{data['category_DJ_' + (i+1)].category_name}}</td>
                            <td class="category-count">{{data['category_DJ_' + (i+1)].clue_count}} / 5</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Final Jeopardy! Round</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{data.category_FJ_1.category_name}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-show="game.round == 'J'">
                <game-questions round="J"></game-questions>
            </div>

            <div v-show="game.round == 'DJ'">
                <game-questions round="DJ"></game-questions>
            </div>
            <div v-show="game.round == &quot;FJ&quot;">
                <div class="panel panel-primary">
                    <div class="panel-heading"><strong>{{data.category_FJ_1.category_name}}</strong> {{data.category_FJ_1.category_comments}}</div>
                    <div v-show="!game.clue_FJ" class="panel-body">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <h4>{{ game.player_1.name || 'Player 1' }}</h4>
                                <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input type="number" v-model="game.player_1.fj_wager" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <h4>{{ game.player_2.name || 'Player 2' }}</h4>
                                <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input type="number" v-model="game.player_2.fj_wager" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <h4>{{ game.player_3.name || 'Player 3' }}</h4>
                                <div class="input-group">
                                    <div class="input-group-addon">$</div>
                                    <input type="number" v-model="game.player_3.fj_wager" class="form-control"/>
                                </div>
                            </div>
                        </div><br/>
                        <div class="row">
                            <div class="col-md-12 text-center"><a target="_blank" v-href="http://www.j-archive.com/wageringcalculator.php?a={{game.player_1.score}}&amp;b={{game.player_2.score}}&amp;c={{game.player_3.score}}&amp;player_a={{game.player_1.name}}&amp;player_b={{game.player_2.name}}&amp;player_c={{game.player_3.name}}">[wagering suggestions for these scores]</a></div>
                        </div>
                    </div>
                    <div v-show="!game.clue_FJ" class="panel-footer text-center">
                        <button type="button" v-click="startClue('clue_FJ')" class="btn btn-lg btn-success">Submit</button>
                    </div>
                </div>
            </div>
            <div v-show="game.round == &quot;end&quot;">
                <h1 class="text-center">Game over!</h1>
                <p class="text-center"><a target="_blank" v-href="http://www.j-archive.com/showgame.php?game_id={{data.id}}">Show game @ J! Archive</a></p>
                <p class="text-center"><a target="_blank" v-href="http://www.j-archive.com/showgameresponses.php?game_id={{data.id}}">Show game responses @ J! Archive</a></p>
            </div>
        </div>

    </div>
</template>
<script>
import GameStore from '../stores/game.js'
import Game5233 from '../stores/game5233.json'
import GameControls from '../components/GameControls'
import GameQuestions from '../components/GameQuestions'

export default {
    name: 'Game',
    components: {
        GameControls,
        GameQuestions
    },
    data () {
        return {
            data: Game5233,
            game: GameStore.shared
        }
    },
    methods: {
        startClue (id) {
            console.log('Start clue')
        }
    }
}
</script>
<style lang="css" scoped>
    .category-name {
        width: 75%;
    }
    .equal, .equal > div[class*='col-'] {
        display: flex;
        flex: 1 1 auto;
        align-items: baseline;
    }
</style>
