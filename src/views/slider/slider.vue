<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Slider 滑块</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <div :style="{height: navList[0].height}">
                <y-slider v-model="slider1" />
                <y-slider v-model="slider2" :max="250" :min="10"></y-slider>
                <span>slider1：{{slider1}}</span>
                <y-button @click="slider1 = slider1 + 4">加4</y-button>
                <br />
                <span>slider2：{{slider2}}</span>
                <y-button @click="slider2 = slider2 + 4">加4</y-button>
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">最基本的滑块。</div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-slider v-model="slider1" /&gt;
  &lt;y-slider v-model="slider2" :max="250" :min="40" /&gt;

  export defalut {
    data() {
      return {
        slider1: 50,
        slider2: 50,
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <h2>API</h2>
      <div v-show="navList[1].version >= version">
        <h3 :id="navList[1].id">{{navList[1].name}}</h3>
        <y-table :data="propList" :columns="propColumns"></y-table>
      </div>
      <div v-show="navList[2].version >= version">
        <h3 :id="navList[2].id">{{navList[2].name}}</h3>
        <y-table :data="eventList" :columns="eventColumns"></y-table>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="navList"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS, EVENT_COLUMNS } from "@/util/config";
export default {
  data() {
    return {
      slider1: 50,
      slider2: 50,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.7",
          height: "180px"
        },
        {
          id: "PROPS",
          name: "Slider Props",
          version: "0.1.7"
        },
        {
          id: "EVENTS",
          name: "Slider Events",
          version: "0.1.7"
        }
      ],
      propColumns: PROP_COLUMNS,
      eventColumns: EVENT_COLUMNS,
      propList: [
        {
          attr: "value",
          explain: `绑定的值，可使用 <code class="keyword-code">v-model</code> 双向绑定`,
          type: "String",
          default: "-"
        },
        {
          attr: "min",
          explain: `最小值`,
          type: "Number",
          default: 0
        },
        {
          attr: "max",
          explain: `最大值`,
          type: "Number",
          default: 100
        },
        {
          attr: "showLabel",
          explain: `是否显示最大最小值标识`,
          type: "Boolean",
          default: true
        },
        {
          attr: "color",
          explain: `滑块颜色`,
          type: "String",
          default: "#2d8cf0"
        }
      ],
      eventList: [
        {
          attr: "on-change",
          explain: "在松开滑动时触发，返回当前的选值，在滑动过程中不会触发",
          return: "value"
        },
        {
          attr: "on-input",
          explain: "滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发",
          return: "value"
        }
      ]
    };
  },
  computed: {
    version() {
      return this.$store.state.version;
    }
  }
};
</script>