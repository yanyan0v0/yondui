<template>
  <div class="y-slider">
    <canvas
      :id="canvasId"
      :width="canvasRect.width + 'px'"
      :height="canvasRect.height + 'px'"
      class="y-slider-canvas"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "y-slider",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      canvasId: "sliderCanvas" + (Date.now() + parseInt(Math.random() * 1000)),
      canvasDom: null,
      canvasRect: {},
      list: [
        [0, 0],
        [0, 10],
        [10, 30],
        [20, 70],
        [30, 10],
        [40, 30],
        [50, 20],
        [60, 60],
        [60, 0]
      ]
    };
  },
  mounted() {
    this.canvasDom = document.getElementById(this.canvasId);
    this.canvasRect = this.canvasDom.getBoundingClientRect();
    console.log(this.canvasRect);
    this.$nextTick(() => {
      var ctx = this.canvasDom.getContext("2d");
      // ctx.translate(0, this.canvasRect.height);
      ctx.fillStyle = "#FF0000";
      ctx.beginPath();
      ctx.moveTo(this.list[0][0], this.canvasRect.height - this.list[0][1]);
      let lines = [];
      for (let i = 1; i < this.list.length; i++) {
        lines.push(this.list[i][0]);
        lines.push(this.canvasRect.height - this.list[i][1]);
        // ctx.lineTo(this.list[i][0], this.canvasRect.height - this.list[i][1]);
      }
      ctx.bezierCurveTo(...lines);
      ctx.stroke();
      // ctx.fill();
      // ctx.scale(1, -1);
    });
  }
};
</script>

<style lang="less">
.y-slider {
  .main;
  &-canvas {
    .full;
  }
}
</style>