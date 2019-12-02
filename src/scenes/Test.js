/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/player/Player';
import PlayerAnimations from '../sprites/player/PlayerAnimations';


export default class Trail extends Phaser.Scene {
  constructor() {
    super({ key: 'Trail' })
    this.player = null;
  }
  init() { }
  preload() { }

  create() {
    PlayerAnimations(this);

    this.player = new Player(this, 50, 50, 'dano');
    this.player.create();
  }

  update() {
    this.player.update()
  }
}
