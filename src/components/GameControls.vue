<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <span class="navbar-brand">
                    <span v-show="game.round == 'DJ'">Double</span>
                    <span v-show="game.round == 'FJ'">Final</span>
                Jeopardy!</span>
            </div>
            <div class="collapse navbar-collapse">
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <div class="input-group">
                            <div
                                class="input-group-addon current-player"
                                v-show="game.control_player == 'player_1'">
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                            <input
                                class="form-control"
                                v-model="game.player_1.name"
                                placeholder="Player 1"
                                type="text">
                            <div class="input-group-addon">
                                {{ game.player_1.score | currency $ 0 }}
                            </div>
                        </div>
                    </div>
                </form>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <div class="input-group">
                            <div
                                class="input-group-addon current-player"
                                v-show="game.control_player == 'player_2'">
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                            <input
                                class="form-control"
                                v-model="game.player_2.name"
                                placeholder="Player 2"
                                type="text">
                            <div class="input-group-addon">
                                {{game.player_2.score | currency $ 0 }}
                            </div>
                        </div>
                    </div>
                </form>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-addon current-player"
                                v-show=
                                "game.control_player == 'player_3'">
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                            <input
                                class="form-control"
                                v-model="game.player_3.name"
                                placeholder="Player 3"
                                type="text">
                            <div class="input-group-addon">
                                {{game.player_3.score | currency $ 0 }}
                            </div>
                        </div>
                    </div>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <button
                            class="btn btn-primary navbar-btn"
                            @click="startGame()"
                            v-show="!game.round"
                            type="button">Start Game
                        </button>
                        <button class="btn btn-primary navbar-btn"
                            @click="endRound()"
                            v-show="game.round == 'J' || game.round == 'DJ' || game.round == 'FJ'"
                            type="button">End Round
                        </button>
                        <button
                            class="btn btn-danger navbar-btn"
                            @click="resetGame()"
                            v-show="game.round == 'end'"
                            type="button">Reset Game
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import GameStore from '../stores/game.js'

export default {
    name: 'GameControls',
    data () {
        return {
            game: GameStore.shared,
            methods: GameStore.methods
        }
    },
    methods: {
        resetGame () {
            this.methods.resetGame()
        },
        startGame () {
            this.methods.startGame()
        },
        endRound () {
            console.log('end round')
        }
    }
}
</script>
<style lang="css" scoped>
    .navbar .input-group {
        margin-bottom: 0;
    }

    .current-player {
        background: goldenrod;
        color: #333;
    }
</style>
