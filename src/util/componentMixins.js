export default {
  computed: {
    computeSize() {
      return classPrefix => {
        this.size
          ? classPrefix + this.size
          : this.$YONDUI.size
            ? classPrefix + this.$YONDUI.size
            : "";
      }
    },
  }
}