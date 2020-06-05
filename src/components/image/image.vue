<template>
  <div class="y-image">
    <ul class="y-image-preview" :class="['y-image-' + direction]">
      <li v-for="(image, index) in urlList" :key="index">
        <img :src="image.url" class="y-image-preview-img" @click="handleImgClick(index)" />
        <div v-if="length > max && index === max - 1" class="y-image-more">
          <y-icon type="tianjia" class="more-icon" />
          <span>{{length - max}}</span>
        </div>
      </li>
    </ul>
    <div v-show="showMask" class="y-image-mask" :style="maskStyle">
      <img
        v-if="data[activeIndex]"
        :src="data[activeIndex].url"
        :style="imageStyle"
        class="y-image-mask-img"
        @click="handleFullImgClick"
      />
      <span class="y-image-operator-btn y-image-pre" @click="changeImage(-1)">
        <y-icon type="sanjiao-zuo"></y-icon>
      </span>
      <span class="y-image-operator-btn y-image-next" @click="changeImage(1)">
        <y-icon type="sanjiao-you"></y-icon>
      </span>
      <span class="y-image-operator-btn y-image-close" @click="showMask = false">
        <y-icon type="guanbi"></y-icon>
      </span>
      <div class="y-image-bar">
        <y-icon type="fangda" @click="handleScale(0.2)"></y-icon>
        <y-icon type="suoxiao" @click="handleScale(-0.2)"></y-icon>
        <y-icon :type="objectFit ==='none' ? 'quanping1' : 'tuichuquanping'" @click="handleFit"></y-icon>
        <y-icon type="shuaxin-zuo" @click="handleRotate(-45)"></y-icon>
        <y-icon type="shuaxin-you" @click="handleRotate(45)"></y-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-image",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    // horizontal 水平 vertical 垂直
    direction: {
      type: String,
      default: "horizontal"
    },
    // 默认0 表示不做限制
    max: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      srcList: [], // 原数组
      urlList: [], // 裁剪后的数组
      length: 0,
      showMask: false,
      activeIndex: 0,
      scale: 1,
      rotate: 0,
      objectFit: "none"
    };
  },
  computed: {
    maskStyle() {
      return {
        zIndex: this.$YONDUI.getZindex()
      };
    },
    imageStyle() {
      return {
        "object-fit": this.objectFit,
        transform: `scale(${this.scale}) rotate(${this.rotate}deg)`
      };
    }
  },
  methods: {
    handleImgClick(index) {
      this.activeIndex = index;
      this.showMask = true;
      this.$emit("on-click", this.data[index]);
    },
    handleFullImgClick() {
      this.$emit("on-click", this.data[this.activeIndex]);
    },
    changeImage(num) {
      if (this.activeIndex + num > this.data.length - 1) {
        this.activeIndex = 0;
      } else if (this.activeIndex + num < 0) {
        this.activeIndex = this.data.length - 1;
      } else {
        this.activeIndex += num;
      }
    },
    handleScale(scale) {
      if (this.scale + scale >= 0.1) {
        this.scale += scale;
      }
    },
    handleFit() {
      this.objectFit = this.objectFit === "none" ? "contain" : "none";
    },
    handleRotate(rotate) {
      this.rotate += rotate;
    }
  },
  watch: {
    data: {
      handler(list) {
        if (list && list.length) {
          this.srcList = list;
          this.length = list.length;
          if (this.max && this.length > this.max) {
            this.urlList = list.slice(0, this.max);
          } else {
            this.urlList = list;
          }
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="less">
.y-image {
  position: relative;
  .y-image-preview {
    .full;
    li {
      position: relative;
      flex: 1;
      cursor: pointer;
      .y-image-preview-img {
        .full;
      }
      .y-image-more {
        .full;
        .center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        color: #fff;
        background-color: #3333334d;
        pointer-events: none;
        cursor: pointer;
        font-size: 32px;
        .more-icon {
          margin: 5px;
          font-size: 24px;
        }
      }
    }
  }
  .y-image-horizontal {
    .flex;
    li + li {
      margin-left: 5px;
    }
  }
  .y-image-vertical {
    li + li {
      margin-bottom: 5px;
    }
  }

  .y-image-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2020;
    background-color: @mask-color;
    .y-image-mask-img {
      .full;
      transition: all 0.3s;
    }
    .y-image-operator-btn {
      .center;
      .pointer;
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      background-color: #606266;
      z-index: 2021;
      &.y-image-pre {
        top: 50%;
        left: 30px;
        transform: translateY(-50%);
      }
      &.y-image-next {
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
      }
      &.y-image-close {
        top: 30px;
        right: 30px;
      }
    }
    .y-image-bar {
      .center-h;
      position: absolute;
      bottom: 30px;
      left: 50%;
      border-radius: 25px;
      padding: 0 20px;
      transform: translateX(-50%);
      color: #fff;
      background-color: #606266;
      z-index: 2021;
      i {
        .pointer;
        padding: 10px;
        font-size: 24px;
      }
    }
  }
}
</style>
