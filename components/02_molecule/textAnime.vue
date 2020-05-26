<template>
  <div>
    <div id="pixi-js-1"></div>
    <div id="pixi-js-2"></div>
  </div>
</template>

<script>
if (process.client) {
  const PIXI = require('pixi.js')
  const app = new PIXI.Application();
  document.getElementById('pixi-js-1').appendChild(app.view);

  const radius = 50;
  const blurSize = 32;

  app.loader.add('sampleImg', '/images/sample.jpg');
  app.loader.load(setup);

  function setup(loader, resources) {
    const background = new PIXI.Sprite(resources.sampleImg.texture);
    app.stage.addChild(background);
    background.width = app.screen.width;
    background.height = app.screen.height;

    const circle = new PIXI.Graphics()
      .beginFill(0xFF0000)
      .drawCircle(radius + blurSize, radius + blurSize, radius)
      .endFill();
    circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

    const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
    const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
    const focus = new PIXI.Sprite(texture);

    app.stage.addChild(focus);
    background.mask = focus;

    app.stage.interactive = true;
    app.stage.on('mousemove', pointerMove);

    function pointerMove(event) {
      focus.position.x = event.data.global.x - focus.width / 2;
      focus.position.y = event.data.global.y - focus.height / 2;
    }
  }
}

export default {
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="css"></style>
