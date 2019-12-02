import Phaser from 'phaser';

export default class extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, sprite) {
    super(scene, x, y, sprite)
    this.scene = scene
    this.scene.add.existing(this)

    this.setScale(2)

    this.hSpeed = 0;
    this.maxSpeed = 7;
    this.acceleration = 1;
    this.friction = 2;

    this.vSpeed = 0;
    this.jump = 10;
    this.gravity = 3;

    this.keyboardArrows = this.scene.input.keyboard.createCursorKeys();
  }
  create() {}

  update() {
    this.horizontalMovement();

    if (this.keyboardArrows.up.isDown) {
      this.vSpeed = this.jump;
    } else {
      this.vSpeed -= this.gravity;
    }
    this.y += this.vSpeed * -1;


    this.animate();
  }

  horizontalMovement() {
    const direction = this.getDirection()

    if (direction === 0) {
      if (Math.abs(this.hSpeed) - this.friction > 0) {
        this.hSpeed -= this.friction * Math.sign(this.hSpeed)
      } else {
        this.hSpeed = 0
      }
    } else {
      if (Math.abs(this.hSpeed) + this.acceleration < this.maxSpeed) {
        this.hSpeed += this.acceleration * direction
      } else {
        this.hSpeed = this.maxSpeed * direction
      }
    }
    this.x += this.hSpeed
  }

  animate() {
    if (this.hSpeed > 0) {
      this.anims.play('running', true)
      this.flipX = false
    } else if (this.hSpeed < 0) {
      this.anims.play('running', true)
      this.flipX = true
    } else {
      this.anims.play('standing', true)
    }
  }

  getDirection() {
    const { left, right } = this.keyboardArrows;
    if (left.isDown && right.isDown) {
      return 0
    } else if (left.isDown) {
      return -1;
    } else if (right.isDown) {
      return 1;
    } else {
      return 0
    }
  }
}
