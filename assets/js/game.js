var config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true
  }
  
var game = new Phaser.Game(config);
  