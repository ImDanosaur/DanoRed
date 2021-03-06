/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/player/Player';
import PlayerAnimations from '../sprites/player/PlayerAnimations';


export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' })
    this.player = null;
  }
  init() {}
  preload() {}

  create() {
    PlayerAnimations(this);

    this.add.text(100, 100, 'This is a thing ', {
      font: '64px Bangers',
      fill: '#7744ff'
    })
    this.player = new Player(this, 50, 50, 'dano');
    this.player.create();
  }

  update() {
    this.player.update()
  }
}
