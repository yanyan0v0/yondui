<template>
  <div class="y-draw" :class="['y-draw-' + position]">
    <div class="y-draw-group">
      <y-icon type="baocun-shixin" title="保存" @click="save"></y-icon>
      <y-icon type="chexiao" title="撤销" @click="back"></y-icon>
      <y-icon type="lajitong-shixin" title="清除" @click="clear"></y-icon>
      <y-divider direction="vertical"></y-divider>
      <y-color-picker v-model="penColor" showFooter width="24px" height="24px"></y-color-picker>
      <y-divider direction="vertical"></y-divider>
      <span>画笔粗细：</span>
      <y-slider v-model="penWidth" :min="1" :max="10"></y-slider>
    </div>
    <canvas
      :id="canvasId"
      :width="canvasRect.width + 'px'"
      :height="canvasRect.height + 'px'"
      class="y-draw-canvas"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "y-draw",
  props: {
    position: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      // 随机id
      canvasId: "drawCanvas" + (Date.now() + parseInt(Math.random() * 1000)),
      // 画笔颜色
      penColor: "#ed4014",
      // 画笔粗细
      penWidth: 3,
      // 是否开始绘图
      startDraw: false,
      // canvas Dom对象
      canvasDom: null,
      // canvas 图形实例对象
      ctx: null,
      // canvas 位置宽高信息
      canvasRect: {},
      // 绘图原点
      drawOrigin: [0, 0],
      // 记录绘制步骤
      step: 0,
      // 当前绘制步骤
      curStep: 0,
      // 保存绘制步骤数据
      canvasHistory: []
    };
  },
  methods: {
    handleMouseDown(event) {
      this.step++;
      // 设置原点坐标
      this.drawOrigin = [
        event.x - this.canvasRect.left,
        event.y - this.canvasRect.top
      ];
      // 开始绘制
      this.ctx.strokeStyle = this.penColor;
      this.ctx.lineWidth = this.penWidth;
      this.ctx.beginPath();
      this.ctx.moveTo(this.drawOrigin[0], this.drawOrigin[1]);
      this.startDraw = true;
    },
    handleMouseMove(event) {
      if (this.startDraw) {
        let curPoint = [
          event.x - this.canvasRect.left,
          event.y - this.canvasRect.top
        ];
        this.ctx.lineTo(curPoint[0], curPoint[1]);
        this.ctx.stroke();
        // 结束绘制
        this.drawOrigin = curPoint;
      }
    },
    handleMouseUp() {
      this.startDraw = false;
      this.canvasHistory[this.step] = this.canvasDom.toDataURL();
    },
    save() {
      let image = this.canvasDom.toDataURL();
      this.$emit("on-save", image);
    },
    back() {
      if (this.step >= 0) {
        this.step--;
        this.ctx.clearRect(0, 0, this.canvasRect.width, this.canvasRect.height);
        let canvasPic = new Image();
        canvasPic.src = this.canvasHistory[this.step];
        canvasPic.addEventListener("load", () => {
          this.ctx.drawImage(canvasPic, 0, 0);
        });
      }
    },
    clear() {
      this.ctx.clearRect(0, 0, this.canvasRect.width, this.canvasRect.height);
      this.canvasHistory = [];
      this.step = 0;
    },
    //下载
    downloadFile(fileName, content) {
      let aLink = document.createElement("a");
      let blob = this.base64ToBlob(content); //new Blob([content]);

      let evt = document.createEvent("HTMLEvents");
      evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
      aLink.download = fileName;
      aLink.href = URL.createObjectURL(blob);

      // aLink.dispatchEvent(evt);
      aLink.click();
    },
    //base64转blob
    base64ToBlob(code) {
      let parts = code.split(";base64,");
      let contentType = parts[0].split(":")[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;

      let uInt8Array = new Uint8Array(rawLength);

      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    }
  },
  mounted() {
    this.canvasDom = document.getElementById(this.canvasId);
    this.ctx = this.canvasDom.getContext("2d");
    this.canvasRect = this.canvasDom.getBoundingClientRect();
    this.canvasDom.addEventListener("mousedown", this.handleMouseDown);
    this.canvasDom.addEventListener("mousemove", this.handleMouseMove);
    this.canvasDom.addEventListener("mouseup", this.handleMouseUp);
    this.canvasDom.addEventListener("mouseover", this.handleMouseUp);
  },
  beforeDestroy() {
    this.canvasDom.removeEventListener("mousedown", this.handleMouseDown);
    this.canvasDom.removeEventListener("mousemove", this.handleMouseMove);
    this.canvasDom.removeEventListener("mouseup", this.handleMouseUp);
    this.canvasDom.removeEventListener("mouseover", this.handleMouseUp);
  }
};
</script>
