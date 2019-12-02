export default function(scene) {
  getAnimations_(scene).forEach((config) => scene.anims.create(config))
}

function getAnimations_(scene) {
  return [
    {
      key: 'death',
      frames: scene.anims.generateFrameNumbers('dano', {
        start: 14,
        end: 16
      }),
      frameRate: 10,
      repeat: -1
    },
    {
      key: 'standing',
      frames: scene.anims.generateFrameNumbers('dano', {
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    },
    {
      key: 'running',
      frames: scene.anims.generateFrameNumbers('dano', {
        start: 17,
        end: 23
      }),
      frameRate: 10,
      repeat: -1
    }]
}
