var config = {
  width: 960,
  height: 640,
  renderer: Phaser.AUTO,
  parent: "game-container",
  transparent: false,
  antialias: true,
  multiTexture: true,
  state: this
};

window.game = new Phaser.Game(config);

function create() {
  var graphics = game.add.graphics(0, 0),
    text = game.add.text(game.world.centerX, 32, "Firestarter", {fill: "#FDF0D5"});

  graphics.beginFill(0xDB4C40, 1);
  graphics.drawCircle(480, 320, 100);

  text.anchor.x = 0.5;
}
