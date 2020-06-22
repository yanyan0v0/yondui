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
            <code-action-bar :name="getNav('JC').name" />
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
        this.$alert.text("点击了" + value);
      }
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('CFFS')">
        <h3 id="CFFS">{{getNav('CFFS').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-dropdown">
              <y-dropdown>
                <a href="javascript:void(0)" class="primary-color">
                  hover触发
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

              <y-dropdown trigger="click">
                <a href="javascript:void(0)" class="primary-color">
                  click触发
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

              <y-dropdown trigger="custom">
                <a href="javascript:void(0)" class="primary-color" @click="visible = !visible">
                  custom触发
                  <y-icon type="sanjiao-xia" size="12"></y-icon>
                </a>
                <y-dropdown-menu :visible="visible" slot="menu">
                  <y-dropdown-item
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                  >{{city.name}}</y-dropdown-item>
                  <y-button @click="visible = false" color="primary" size="small">关闭</y-button>
                </y-dropdown-menu>
              </y-dropdown>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              触发方式
              <code>trigger</code>可选
              <code>hover</code>悬停（默认）、
              <code>click</code>点击、
              <code>custom</code>自定义，使用 custom 时，需配合 visible 一起使用
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('CFFS').height}">
            <code-action-bar :name="getNav('CFFS').name" />
            <pre v-pre>
            <code>
  &lt;y-dropdown&gt;
    &lt;a href="javascript:void(0)"&gt;
      hover触发
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

  &lt;y-dropdown trigger="click"&gt;
    &lt;a href="javascript:void(0)"&gt;
      click触发
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

  &lt;y-dropdown trigger="custom"&gt;
    &lt;a href="javascript:void(0)" @click="visible = !visible"&gt;
      custom触发
      &lt;y-icon type="sanjiao-xia" size="12"&gt;&lt;/y-icon&gt;
    &lt;/a&gt;
    &lt;y-dropdown-menu :visible="visible" slot="menu"&gt;
      &lt;y-dropdown-item
        v-for="city in cityList"
        :key="city.name"
        :value="city.name"
      &gt;{{city.name}}&lt;/y-dropdown-item&gt;
      &lt;y-button @click="visible = false" color="primary" size="small"&gt;关闭&lt;/y-button&gt;
    &lt;/y-dropdown-menu&gt;
  &lt;/y-dropdown&gt;

  export default {
    data() {
      return {
        visible: false
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('WZ')">
        <h3 id="WZ">{{getNav('WZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-dropdown">
              <y-dropdown>
                <a href="javascript:void(0)" class="primary-color">
                  上方显示
                  <y-icon type="sanjiao-xia" size="12"></y-icon>
                </a>
                <y-dropdown-menu placement="top" slot="menu">
                  <y-dropdown-item
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                  >{{city.name}}</y-dropdown-item>
                </y-dropdown-menu>
              </y-dropdown>

              <y-dropdown>
                <a href="javascript:void(0)" class="primary-color">
                  右边显示
                  <y-icon type="sanjiao-xia" size="12"></y-icon>
                </a>
                <y-dropdown-menu placement="right" slot="menu">
                  <y-dropdown-item
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                  >{{city.name}}</y-dropdown-item>
                </y-dropdown-menu>
              </y-dropdown>

              <y-dropdown>
                <a href="javascript:void(0)" class="primary-color">
                  下方显示
                  <y-icon type="sanjiao-xia" size="12"></y-icon>
                </a>
                <y-dropdown-menu placement="bottom" slot="menu">
                  <y-dropdown-item
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                  >{{city.name}}</y-dropdown-item>
                </y-dropdown-menu>
              </y-dropdown>

              <y-dropdown>
                <a href="javascript:void(0)" class="primary-color">
                  左边显示
                  <y-icon type="sanjiao-xia" size="12"></y-icon>
                </a>
                <y-dropdown-menu placement="left" slot="menu">
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
              通过设置属性
              <code>placement</code>
              可以更改下拉菜单出现的方向，可选
              <code>top</code>上、
              <code>right</code>右、
              <code>bottom</code>下、
              <code>left</code>左，当展示高度不足时会自动调整方向。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('WZ').height}">
            <code-action-bar :name="getNav('WZ').name" />
            <pre v-pre>
            <code>
  &lt;y-dropdown&gt;
    &lt;a href="javascript:void(0)"&gt;
      上方显示
      &lt;y-icon type="sanjiao-xia" size="12"&gt;&lt;/y-icon&gt;
    &lt;/a&gt;
    &lt;y-dropdown-menu placement="top" slot="menu"&gt;
      &lt;y-dropdown-item
        v-for="city in cityList"
        :key="city.name"
        :value="city.name"
      &gt;{{city.name}}&lt;/y-dropdown-item&gt;
    &lt;/y-dropdown-menu&gt;
  &lt;/y-dropdown&gt;

  &lt;y-dropdown&gt;
    &lt;a href="javascript:void(0)"&gt;
      右边显示
      &lt;y-icon type="sanjiao-xia" size="12"&gt;&lt;/y-icon&gt;
    &lt;/a&gt;
    &lt;y-dropdown-menu placement="right" slot="menu"&gt;
      &lt;y-dropdown-item
        v-for="city in cityList"
        :key="city.name"
        :value="city.name"
      &gt;{{city.name}}&lt;/y-dropdown-item&gt;
    &lt;/y-dropdown-menu&gt;
  &lt;/y-dropdown&gt;
  
  &lt;y-dropdown&gt;
    &lt;a href="javascript:void(0)"&gt;
      下方显示
      &lt;y-icon type="sanjiao-xia" size="12"&gt;&lt;/y-icon&gt;
    &lt;/a&gt;
    &lt;y-dropdown-menu placement="bottom" slot="menu"&gt;
      &lt;y-dropdown-item
        v-for="city in cityList"
        :key="city.name"
        :value="city.name"
      &gt;{{city.name}}&lt;/y-dropdown-item&gt;
    &lt;/y-dropdown-menu&gt;
  &lt;/y-dropdown&gt;
  
  &lt;y-dropdown&gt;
    &lt;a href="javascript:void(0)"&gt;
      左边显示
      &lt;y-icon type="sanjiao-xia" size="12"&gt;&lt;/y-icon&gt;
    &lt;/a&gt;
    &lt;y-dropdown-menu placement="left" slot="menu"&gt;
      &lt;y-dropdown-item
        v-for="city in cityList"
        :key="city.name"
        :value="city.name"
      &gt;{{city.name}}&lt;/y-dropdown-item&gt;
    &lt;/y-dropdown-menu&gt;
  &lt;/y-dropdown&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('QXYC')">
        <h3 id="QXYC">{{getNav('QXYC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-dropdown">
              <y-dropdown>
                <a href="javascript:void(0)" class="primary-color">
                  取消点击后隐藏
                  <y-icon type="sanjiao-xia" size="12"></y-icon>
                </a>
                <y-dropdown-menu click-no-hide slot="menu">
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
              下拉菜单默认在点击菜单项后会被隐藏，将
              <code>click-no-hide</code>
              属性默认为
              <code>true</code>
              可以关闭此功能
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('QXYC').height}">
            <code-action-bar :name="getNav('QXYC').name" />
            <pre v-pre>
            <code>
  &lt;y-dropdown&gt;
    &lt;a href="javascript:void(0)"&gt;
      取消点击后隐藏
      &lt;y-icon type="sanjiao-xia" size="12"&gt;&lt;/y-icon&gt;
    &lt;/a&gt;
    &lt;y-dropdown-menu click-no-hide slot="menu"&gt;
      &lt;y-dropdown-item
        v-for="city in cityList"
        :key="city.name"
        :value="city.name"
      &gt;{{city.name}}&lt;/y-dropdown-item&gt;
    &lt;/y-dropdown-menu&gt;
  &lt;/y-dropdown&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('QT')">
        <h3 id="QT">{{getNav('QT').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-dropdown">
              <y-dropdown>
                <a href="javascript:void(0)" class="primary-color">
                  嵌套下拉
                  <y-icon type="sanjiao-xia" size="12"></y-icon>
                </a>
                <y-dropdown-menu slot="menu">
                  <y-dropdown-item>北京</y-dropdown-item>
                  <y-dropdown-item>上海</y-dropdown-item>
                  <y-dropdown-item>广州</y-dropdown-item>
                  <y-dropdown>
                    <y-dropdown-item>
                      深圳
                      <y-icon type="sanjiao-you" size="12"></y-icon>
                    </y-dropdown-item>
                    <y-dropdown-menu style="width: 70px" placement="right" slot="menu">
                      <y-dropdown-item>宝安</y-dropdown-item>
                      <y-dropdown style="width: 100%">
                        <y-dropdown-item>
                          南山
                          <y-icon type="sanjiao-you" size="12"></y-icon>
                        </y-dropdown-item>
                        <y-dropdown-menu style="width: 80px" placement="right" slot="menu">
                          <y-dropdown-item>欢乐谷</y-dropdown-item>
                          <y-dropdown-item>深圳湾</y-dropdown-item>
                          <y-dropdown-item>世界之窗</y-dropdown-item>
                        </y-dropdown-menu>
                      </y-dropdown>
                      <y-dropdown-item>福田</y-dropdown-item>
                    </y-dropdown-menu>
                  </y-dropdown>
                </y-dropdown-menu>
              </y-dropdown>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向和宽度。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('QT').height}">
            <code-action-bar :name="getNav('QT').name" />
            <pre v-pre>
            <code>
  &lt;y-dropdown&gt;
    &lt;a href="javascript:void(0)" class="primary-color"&gt;
      嵌套下拉
      &lt;y-icon type="sanjiao-xia" size="12"&gt;&lt;/y-icon&gt;
    &lt;/a&gt;
    &lt;y-dropdown-menu slot="menu"&gt;
      &lt;y-dropdown-item&gt;北京&lt;/y-dropdown-item&gt;
      &lt;y-dropdown-item&gt;上海&lt;/y-dropdown-item&gt;
      &lt;y-dropdown-item&gt;广州&lt;/y-dropdown-item&gt;
      &lt;y-dropdown&gt;
        &lt;y-dropdown-item&gt;
          深圳
          &lt;y-icon type="sanjiao-you" size="12"&gt;&lt;/y-icon&gt;
        &lt;/y-dropdown-item&gt;
        &lt;y-dropdown-menu style="width: 70px" placement="right" slot="menu"&gt;
          &lt;y-dropdown-item&gt;宝安&lt;/y-dropdown-item&gt;
          &lt;y-dropdown style="width: 100%"&gt;
            &lt;y-dropdown-item&gt;
              南山
              &lt;y-icon type="sanjiao-you" size="12"&gt;&lt;/y-icon&gt;
            &lt;/y-dropdown-item&gt;
            &lt;y-dropdown-menu style="width: 80px" placement="right" slot="menu"&gt;
              &lt;y-dropdown-item&gt;欢乐谷&lt;/y-dropdown-item&gt;
              &lt;y-dropdown-item&gt;深圳湾&lt;/y-dropdown-item&gt;
              &lt;y-dropdown-item&gt;世界之窗&lt;/y-dropdown-item&gt;
            &lt;/y-dropdown-menu&gt;
          &lt;/y-dropdown&gt;
          &lt;y-dropdown-item&gt;福田&lt;/y-dropdown-item&gt;
        &lt;/y-dropdown-menu&gt;
      &lt;/y-dropdown&gt;
    &lt;/y-dropdown-menu&gt;
  &lt;/y-dropdown&gt;
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
          <h3 id="DROPDOWNMENU">{{getNav('DROPDOWNMENU').name}}</h3>
          <y-table :data="filterVersion(dmPropList)" :columns="propColumns"></y-table>
        </div>
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
import viewMixins from "@/mixins/view";
import { PROP_COLUMNS } from "@/util/config";
export default {
  name: "Dropdown",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      visible: false,
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
          height: "200px"
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
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "QT",
          name: "嵌套下拉",
          version: "1.0.0",
          height: "200px"
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
          id: "DROPDOWNMENU",
          name: "Dropdown Menu Props",
          version: "1.0.0"
        },
        {
          id: "DROPDOWNITEM",
          name: "Dropdown Item Props",
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
      dmPropList: [
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
      this.$alert.text("点击了" + value);
    }
  }
};
</script>

<style lang="less">
.preview-dropdown {
  .y-dropdown {
    margin: 5px 10px;
  }
}
</style>