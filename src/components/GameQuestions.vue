<template>
<div class="game-questions">
    <div class="game-questions__row">
        <div
            v-for="i in 6"
            class="game-questions__category">
                <strong>{{data['category_'+round+'_'+(i+1)].category_name}}</strong>
                <div v-show="data['category_'+round+'_'+(i+1)].category_comments" style="padding:5px">{{data['category_'+round+'_'+(i+1)].category_comments}}</div>
        </div>
    </div>
    <div
        v-for="j in 6"
        class="game-questions__row">
        <div
            v-for="i in 6"
            @click="startClue('clue_'+round+'_' + (i+1) + '_'+(j+1))"
            v-show="data['clue_'+round+'_'+(i+1)+'_'+(j+1)] && !game['clue_'+round+'_'+(i+1)+'_'+(j+1)]"
            style="cursor:pointer;"
            :class="{ 'daily-double': data['clue_'+round+'_'+(i+1)+'_'+(j+1)].daily_double }"
            class="game-questions__question">
                <sub v-if="data['clue_'+round+'_'+(i+1)+'_'+(j+1)].daily_double">Daily Double</sub>
                <strong>{{ dollarAmount(j+1) | currency $ 0 }}</strong>
        </div>
    </div>
</div>

<modal :show.sync="showModal">
    <h4 slot="header">{{ currentQuestion.category.category_name }}
        <em>– {{ currentQuestion.value | currency $ 0 }}</em>
    </h4>
    <div slot="body" class="text-centerr">
        <h3>Q: {{ currentQuestion.clue.clue_text }}</h3>
        <h3 class="text-info"><strong>A: {{ currentQuestion.clue.correct_response }}</strong></h3>
    </div>
</modal>


</template>
<script>
import Game5233 from '../stores/game5233.json'
import GameStore from '../stores/game.js'
import Modal from './Modal.vue'

export default {
    name: 'GameQuestions',

    components: {
        Modal
    },

    props: ['round'],

    data () {
        return {
            data: Game5233,
            game: GameStore.shared,
            showModal: false,
            currentQuestion: null
        }
    },

    methods: {
        dollarAmount (clue_index) {
            if (this.round === 'J') {
                return clue_index * 200
            } else {
                return clue_index * 400
            }
        },

        startClue (clue) {
            this.setCurrentQuestion(clue)
            this.showModal = true
        },

        setCurrentQuestion (clue) {
            var split = clue.split('_').slice(0, 3)
            split[0] = 'category'

            if (split.length === 2) {
                split.push(1)
            }

            this.getQuestionValue(clue)

            this.currentQuestion = {
                id: clue,
                category: this.data[split.join('_')],
                clue: this.data[clue],
                game: this.game,
                value: this.getQuestionValue(clue)
            }
        },

        getQuestionValue (question) {
            var split, round, questionNum, multiplier

            split = question.split('_')
            round = split[1]
            questionNum = split[3]

            if (round === 'J') {
                multiplier = 200
            } else if (round === 'DJ') {
                multiplier = 400
            }

            return questionNum * multiplier
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
  padding: 0 20px;
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
