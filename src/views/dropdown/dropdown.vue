<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Dropdown 下拉菜单</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-dropdown @on-click="handleDropdownClick">
                <a href="javascript:void(0)" class="primary-color">
                  下拉菜单
                  <y-icon type="sanjiao-xia" size="12"></y-icon>
                </a>
                <y-dropdown-menu slot="menu">
                  <y-dropdown-item
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                  >{{city.name}}</y-dropdown-item>
                </y-dropdown-menu>
              </y-dropdown>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              需要配合
              <code>y-dropdown-menu</code>
              和
              <code>y-dropdown-item</code>
              两个组件来使用，并且给列表设置具名 slot 为
              <code>menu</code>。
              <br />默认是 hover 触发，触发对象可以是链接、按钮等各种元素。
              <br />
              <code>on-click</code>默认先获取绑定的
              <code>value</code>值，没有则获取y-dropdown-item内的文本值
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <pre v-pre>
            <code>
  &lt;y-dropdown @on-click="handleDropdownClick"&gt;
    &lt;a href="javascript:void(0)" class="primary-color"&gt;
      下拉菜单
      &lt;y-icon type="sanjiao-xia" size="12"&gt;&lt;/y-icon&gt;
    &lt;/a&gt;
    &lt;y-dropdown-menu slot="menu"&gt;
      &lt;y-dropdown-item
        v-for="city in cityList"
        :key="city.name"
        :value="city.name"
      &gt;{{city.name}}&lt;/y-dropdown-item&gt;
    &lt;/y-dropdown-menu&gt;
  &lt;/y-dropdown&gt;

  export default {
    data() {
      return {
        cityList: [
          {
            name: "北京"
          },
          {
            name: "上海"
          },
          {
            name: "广州"
          },
          {
            name: "深圳"
          }
        ]
      };
    },
    methods: {
      handleDropdownClick(value) {
        this.$alert.info("点击了" + value);
      }
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table
        :name="$options.name"
        :propList="filterVersion(propList)"
        :slotList="filterVersion(slotList)"
        :eventList="filterVersion(eventList)"
      >
        <div>
          <h3 id="DROPDOWNITEM">{{getNav('DROPDOWNITEM').name}}</h3>
          <y-table :data="filterVersion(diPropList)" :columns="propColumns"></y-table>
        </div>
      </footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/util/viewMixins";
import { PROP_COLUMNS } from "@/util/config";
export default {
  // [Vue warn]: Do not use built-in or reserved HTML elements as component id: Switch
  name: "Dropdown",
  components: {
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      select1: "",
      select2: "",
      select3: "",
      select4: "",
      select5: "",
      select6: ["北京"],
      select7: "",
      select8: [],
      cityList: [
        {
          name: "北京"
        },
        {
          name: "上海"
        },
        {
          name: "广州"
        },
        {
          name: "深圳"
        }
      ],
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "230px"
        },
        {
          id: "CFFS",
          name: "触发方式",
          version: "1.0.0",
          height: "280px"
        },
        {
          id: "WZ",
          name: "位置",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "QXYC",
          name: "点击取消隐藏",
          version: "1.0.0"
        },
        {
          id: "QT",
          name: "嵌套下拉",
          version: "1.0.0"
        },
        {
          id: "PROPS",
          name: "Dropdown Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Dropdown Slots",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Dropdown Events",
          version: "1.0.0"
        },
        {
          id: "DROPDOWNITEM",
          name: "DropdownItem Props",
          version: "1.0.0"
        }
      ],
      propColumns: PROP_COLUMNS,
      propList: [
        {
          version: "1.0.0",
          attr: "trigger",
          explain: `触发方式，可选值为 <code class="keyword-code">hover</code>悬停、<code class="keyword-code">click</code>点击、<code class="keyword-code">custom</code> 自定义，使用 custom 时，需配合 visible 一起使用`,
          type: "String | Number | Array",
          default: "空"
        },
        {
          version: "1.0.0",
          attr: "visible",
          explain: `手动控制下拉框的显示，在 trigger = 'custom' 时使用`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "placement",
          explain: `菜单弹出位置，可选值为 <code class="keyword-code">top</code>上、<code class="keyword-code">right</code>右、<code class="keyword-code">bottom</code>下、<code class="keyword-code">left</code>左`,
          type: "String",
          default: "bottom"
        },
        {
          version: "1.0.0",
          attr: "click-no-hide",
          explain: `是否在点击菜单项后隐藏菜单`,
          type: "Boolean",
          default: "false"
        }
      ],
      slotList: [
        {
          version: "1.0.0",
          attr: "-",
          explain: "设置触发器"
        },
        {
          version: "1.0.0",
          attr: "menu ",
          explain: "下拉菜单内容"
        }
      ],
      eventList: [
        {
          version: "1.0.0",
          attr: "on-click",
          explain: "点击选项后的回调函数",
          return: "y-dropdown-item 的 value 值 或 文本值"
        },
        {
          version: "1.0.0",
          attr: "on-visible-change",
          explain: "下拉框展开或收起时触发",
          return: "visible"
        },
        {
          version: "1.0.0",
          attr: "on-clickoutside",
          explain: "点击外部关闭下拉菜单时触发",
          return: "event"
        }
      ],
      diPropList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: "默认根据此属性值进行筛选",
          type: "String | Number",
          default: "空"
        },
        {
          version: "1.0.0",
          attr: "disabled",
          explain: "是否禁用当前项",
          type: "Boolean",
          default: "false"
        }
      ]
    };
  },
  methods: {
    handleDropdownClick(value) {
      this.$alert.info("点击了" + value);
    }
  }
};
</script>

<style lang="less">
.preview-select {
  .y-select {
    margin-bottom: 10px;
  }
}
</style>