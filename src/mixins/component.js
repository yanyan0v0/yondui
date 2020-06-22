export default {
  beforeCreate() {
    if (!this.$YONDUI) {
      this.$YONDUI = {
        size: '',
        zIndex: 2020,
        getZindex() {
          return this.zIndex++
        }
      }
    }
  },
  computed: {
    computeSize() {
      return (classPrefix, parentSize) => {
        let size = this.size || parentSize || this.$YONDUI.size
        return size ? classPrefix + size : "";
      }
    }
  }
}