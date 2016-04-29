var Game = {
    shared: {
        round: null,
        player_1: {
            name: '',
            score: 0
        },
        player_2: {
            name: '',
            score: 0
        },
        player_3: {
            name: '',
            score: 0
        },
        control_player: 'player_1'
    },
    methods: {
        resetGame () {
            Game.shared = {
                control_player: 'player_1'
            }
        },
        startGame () {
            console.log('game:start emit')
            Game.shared.round = 'J'

            // socket.emit('game:start', {
            //     data: $scope.data,
            //     game: $scope.game
            // }, function (result) {
            //     console.log('callback');
            // });
        }
    }
}
export default Game
