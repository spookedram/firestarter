var config = {
    width: 960,
    height: 640,
    renderer: Phaser.AUTO,
    parent: "game-container",
    antialias: true,
    multiTexture: true
};

var game = new Phaser.Game(config);

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

game.state.start(boot);
