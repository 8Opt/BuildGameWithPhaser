class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image("background", "assets/imgs/background.png");
    //
    this.load.spritesheet("ship", "assets/imgs/ship.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("ship2", "assets/imgs/ship2.png",{
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet("ship3", "assets/imgs/ship3.png",{
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet("explosion", "assets/imgs/explosion.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    // 2.1 load the spritesheet
    this.load.spritesheet("power-up", "assets/imgs/power-up.png",{
      frameWidth: 16,
      frameHeight: 16
    });

  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
  }
}
