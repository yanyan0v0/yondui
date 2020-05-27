import Vue from "vue";

export default {
  name: "y-tooltip",
  data() {
    return {
      top: 0
    };
  },
  beforeCreate() {
    console.log(this.$options.name);
    let _this = this;
    this.vm = new Vue({
      render(h) {
        return h("div", {
          class: {
            [_this.$options.name]: true
          }
        });
      }
    }).$mount();
    document.body.appendChild(this.vm.$el);
  },
  render() {
    return ''
  },
};