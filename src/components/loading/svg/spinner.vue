 <template>
  <div class="y-loading-spinner">
    <div class="double-bounce1" :style="style"></div>
    <div class="double-bounce2" :style="style"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#000"
    }
  },
  computed: {
    style() {
      return {
        "background-color": this.color
      };
    }
  }
};
</script>
