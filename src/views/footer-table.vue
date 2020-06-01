<template>
  <div class="y-footer-table">
    <h2>API</h2>

    <!-- 分割线 -->
    <slot name="top"></slot>

    <!-- 分割线 -->
    <div v-if="propList.length">
      <h3 id="PROPS">{{name}} Props</h3>
      <y-table :data="propList" :columns="propColumns"></y-table>
    </div>

    <!-- 分割线 -->
    <div v-if="slotList.length">
      <h3 id="SLOTS">{{name}} Slots</h3>
      <y-table :data="slotList" :columns="slotColumns"></y-table>
    </div>

    <!-- 分割线 -->
    <div v-if="eventList.length">
      <h3 id="EVENTS">{{name}} Events</h3>
      <y-table :data="eventList" :columns="eventColumns"></y-table>
    </div>

    <!-- 分割线 -->
    <slot></slot>
  </div>
</template>

<script>
import { PROP_COLUMNS, SLOT_COLUMNS, EVENT_COLUMNS } from "@/util/config";
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    propList: {
      type: Array,
      default: () => []
    },
    slotList: {
      type: Array,
      default: () => []
    },
    eventList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      propColumns: PROP_COLUMNS,
      slotColumns: SLOT_COLUMNS,
      eventColumns: EVENT_COLUMNS
    };
  }
};
</script>