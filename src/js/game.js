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

function create () {
  var graphics = game.add.graphics(0, 0);

  graphics.beginFill(0x90c146, 1);
  graphics.drawCircle(300, 300, 100);

  game.physics.enable(graphics, Phaser.Physics.ARCADE);

  graphics.body.velocity.x = 150;
}
