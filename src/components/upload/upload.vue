<template>
  <div class="y-upload">
    <slot></slot>
    <input v-show="false" type="file" :accept="accept" ref="fileInput" @change="handleFileChange" />
  </div>
</template>

<script>
export default {
  name: "y-upload",
  props: {
    active: Boolean,
    action: String,
    multiple: Boolean,
    headers: Object,
    data: Object,
    accept: String
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleTriggerClick() {
      this.$refs.fileInput.click();
    },
    handleFileChange(e) {
      if (e.target.files && e.target.files.length) {
        for (let file of e.target.files) {
          this.upload(file);
        }
      }
    },
    upload(file) {
      const formData = new FormData();
      formData.append("file", file);
      if (this.data) formData.append("data", this.data);
      fetch(this.action, {
        method: "post",
        body: formData,
        headers: this.headers
      })
        .then(response => response.json())
        .then(res => {
          this.$emit("on-success", res);
        })
        .catch(err => {
          this.$emit("on-error", err);
        });
    }
  },
  watch: {
    active(active) {
      if (active) this.$refs.fileInput.click();
    }
  }
};
</script>