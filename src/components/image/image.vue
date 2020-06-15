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
import componentMixins from "@/util/componentMixins";
export default {
  name: "y-image",
  mixins: [componentMixins],
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
      this.scale = 1;
      this.rotate = 0;
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

