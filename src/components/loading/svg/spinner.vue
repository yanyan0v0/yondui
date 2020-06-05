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

<style>
.y-loading-spinner {
  position: relative;
  width: 100%;
  height: 100%;
}

.y-loading-spinner .double-bounce1,
.y-loading-spinner .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: y-loading-spinner 2s infinite ease-in-out;
  animation: y-loading-spinner 2s infinite ease-in-out;
}

.y-loading-spinner .double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@keyframes y-loading-spinner {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>