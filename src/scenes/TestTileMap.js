import Phaser from 'phaser';
import testJson from '../tileset/test/test.json'

export default class extends Phaser.Tilemaps.Tilemap {
  constructor(scene) {
    super(scene, testJson)
    this.scene = scene
  }
}
