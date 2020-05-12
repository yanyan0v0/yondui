<template>
  <ul class="y-menu">
    <li v-for="(menuItem, index) in data" :key="index">
      <a>
        <y-icon v-if="menuItem.icon" :type="menuItem.icon" />
        {{menuItem.name}}
      </a>
      <y-menu v-if="menuItem.children" :data="menuItem.children"></y-menu>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.y-menu {
  & > li {
    margin-left: 10px;
  }
}
</style>