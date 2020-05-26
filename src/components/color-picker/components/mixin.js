import tinycolor from "tinycolor2";
export default {
  props: {
    color: {
      type: Object,
      required: true
    }
  },
  computed: {
    hsva() {
      return this.color.toHsv()
    },
    hueColor() {
      return tinycolor({
        h: this.hsva.h,
        s: 100,
        v: 100,
        a: 1
      }).toHexString()
    }
  },
}