import Game from './../components/Game'
import Board from './../components/Board'
import Season from './../components/Season'
import Seasons from './../components/Seasons'

export default {
    '/game/:game_id': {
        name: 'game',
        component: Game
    },
    '/board': {
        name: 'board',
        component: Board
    },
    '/seasons': {
        name: 'seasons',
        component: Seasons
    },
    '/seasons/:season_id': {
        name: 'season',
        component: Season
    }
}
