<template>
  <div class="code-action-bar">
    <y-icon type="quanping" title="放大" @click="fullCode"></y-icon>
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
        width: "fit-content",
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
  i {
    margin: 0 5px;
    cursor: pointer;
  }
}
</style>