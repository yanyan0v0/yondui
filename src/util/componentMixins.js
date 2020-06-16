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
      return classPrefix => {
        return this.size
          ? classPrefix + this.size
          : this.$YONDUI.size
            ? classPrefix + this.$YONDUI.size
            : "";

      }
    },
  }
}