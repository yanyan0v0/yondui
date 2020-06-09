<template>
  <div class="code-action-bar">
    <span @click="fullCode">
      <y-icon type="quanping"></y-icon>
      <y-tooltip>放大</y-tooltip>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  methods: {
    fullCode() {
      let preHtml = this.$el.parentNode.lastChild.innerHTML;
      this.$dialog.info({
        title: this.name,
        content: `<pre>${preHtml}</pre>`,
        cancelText: "",
        width: "max-content",
        onOk: dialog => {
          dialog.close();
        }
      });
    }
  }
};
</script>

<style lang="less">
.code-action-bar {
  position: absolute;
  top: 10px;
  right: 30px;
  color: #fff;
  span {
    position: relative;
    margin: 0 5px;
    cursor: pointer;
  }
}
</style>