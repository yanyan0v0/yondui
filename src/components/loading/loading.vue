<template>
  <div class="ct-loading">
    <svg width="5rem" height="5rem">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="transparent"
        stroke-width="3"
        stroke-dasharray="31.415 31.415"
        stroke="#02bcfe"
        stroke-linecap="round"
        transform="rotate(76.0493 25 25)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0, 25 25;360, 25 25"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#02bcfe;#3be6cb;#02bcfe"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="25"
        cy="25"
        r="10"
        fill="transparent"
        stroke-width="3"
        stroke-dasharray="15.7 15.7"
        stroke="#3be6cb"
        stroke-linecap="round"
        transform="rotate(283.951 25 25)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360, 25 25;0, 25 25"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#3be6cb;#02bcfe;#3be6cb"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <div class="loading-tip">
      <slot>Loading...</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-loading"
};
</script>

<style lang="less" scoped>
.ct-loading {
  .full;
  .center;
  flex-direction: column;
  .loading-tip {
    color: #fff;
  }
}
</style>