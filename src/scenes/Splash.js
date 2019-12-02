import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'SplashScene' });
  }

  preload() {
    // sprites here!
    this.load.spritesheet('dano', './assets/sprites/dano.png', {
      frameWidth: 24,
      frameHeight: 24
    })
    // tilesets
    this.load.image('tiles', './assets/tilesets/Swampy2.png');
    this.load.tilemapTiledJSON('test', './src/tileset/test/test.json');
  }

  create() {
    this.scene.start('Trail');
  }

  update() { }
}
