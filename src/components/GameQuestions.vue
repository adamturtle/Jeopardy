<template>
<div class="game-questions">
    <div class="game-questions__row">
        <div
            v-for="i in 6"
            class="game-questions__category">
                <strong>{{data['category_J_'+(i+1)].category_name}}</strong>
                <div v-show="data['category_J_'+(i+1)].category_comments" style="padding:5px">{{data['category_J_'+(i+1)].category_comments}}</div>
        </div>
    </div>
    <div
        v-for="j in 6"
        class="game-questions__row">
        <div
            v-for="i in 6"
            @click="startClue('clue_J_' + (i+1) + '_'+(j+1))"
            v-show="data['clue_J_'+(i+1)+'_'+(j+1)] && !game['clue_J_'+(i+1)+'_'+(j+1)]"
            style="cursor:pointer;"
            :class="{ 'daily-double': data['clue_J_'+(i+1)+'_'+(j+1)].daily_double }"
            class="game-questions__question">
                <sub v-if="data['clue_J_'+(i+1)+'_'+(j+1)].daily_double">Daily Double</sub>
                <strong>{{ dollarAmount((j+1), "J") | currency $ 0 }}</strong>
                <!-- <div class="pull-right"><em>{{ data['category_J_'+(i+1)].category_name | lowercase }}</em></div> -->
        </div>
    </div>
</div>
</template>
<script>
import Game5233 from '../stores/game5233.json'
import GameStore from '../stores/game.js'

export default {
    name: 'GameQuestions',

    data () {
        return {
            data: Game5233,
            game: GameStore.shared
        }
    },

    methods: {
        dollarAmount (clue_index, round) {
            if (round === 'J') {
                return clue_index * 200
            }
        },

        startClue (clue) {
            console.log(this.data[clue].clue_text)
        }
    }
}
</script>
<style lang="css" scoped>
.game-questions {
  display: table;
  height: 100vh;
  border-spacing: 10px;
}

.game-questions__row {
  display: table-row;
}

.game-questions__category,
.game-questions__question {
  display: table-cell;
  background: #fff;
  vertical-align: middle;
  text-align: center;
  width: 16.666666667%;
}

.game-questions__category {
  background: #1dd2af;
  color: #fff;
}

.game-questions__question {
    font-size: 180%;
    transition: .2s background;
}

.game-questions__question:hover {
    background: #e2fbf6;
}

.daily-double {
    background: #FFEC8B;
}

sub {
    font-size: 1.3rem;
    display: block;
    line-height: 1.3rem;
    font-style: italic;
}
</style>
