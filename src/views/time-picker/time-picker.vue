<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>TimePicker 时间选择器</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-time-picker v-model="time1" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              最基本的时间选择器，通过
              <code>v-model</code>绑定数据。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;y-time-picker v-model="time1" /&gt;

  export default {
    data() {
      return {
        time1: ''
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('FWXZ')">
        <h3 id="FWXZ">{{getNav('FWXZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-time-picker range v-model="time2" />
              <p>{{time2}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>range</code>可选择时间范围。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('FWXZ').height}">
            <code-action-bar :name="getNav('FWXZ').name" />
            <pre v-pre>
            <code>
  &lt;y-time-picker range v-model="time2" /&gt;

  export default {
    data() {
      return {
        time2: []
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('SJGS')">
        <h3 id="SJGS">{{getNav('SJGS').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <p>hh时</p>
              <y-time-picker format="hh时" v-model="time3" />
              <p>实际的值为：{{time3}}</p>
              <y-divider />
              <p>hh时mm分</p>
              <y-time-picker format="hh时mm分" v-model="time4" />
              <p>实际的值为：{{time4}}</p>
              <y-divider />
              <p>hh时mm分ss秒</p>
              <y-time-picker format="hh时mm分ss秒" v-model="time5" />
              <p>实际的值为：{{time5}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>format</code>可以改变时间的显示格式，但实际的值不会同样变化。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('SJGS').height}">
            <code-action-bar :name="getNav('SJGS').name" />
            <pre v-pre>
            <code>
  &lt;p&gt;hh时&lt;/p&gt;
  &lt;y-time-picker format="hh时" v-model="time3" /&gt;
  &lt;p&gt;实际的值为：{{time3}}&lt;/p&gt;

  &lt;p&gt;hh时mm分&lt;/p&gt;
  &lt;y-time-picker format="hh时mm分" v-model="time4" /&gt;
  &lt;p&gt;实际的值为：{{time4}}&lt;/p&gt;

  &lt;p&gt;hh时mm分ss秒&lt;/p&gt;
  &lt;y-time-picker format="hh时mm分ss秒" v-model="time5" /&gt;
  &lt;p&gt;实际的值为：{{time5}}&lt;/p&gt;

  export default {
    data() {
      return {
        time3: "",
        time4: "",
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('JY')">
        <h3 id="JY">{{getNav('JY').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-time-picker disabled :value="new Date()" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>disabled</code>可以禁用时间选择。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JY').height}">
            <code-action-bar :name="getNav('JY').name" />
            <pre>
            <code>
  &lt;y-date-picker disabled :value="new Date()" /&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('SJGL')">
        <h3 id="SJGL">{{getNav('SJGL').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <p>过滤小时</p>
              <y-time-picker :filter-time="filterTime" v-model="time6" />
              <p>左右两边都过滤小时</p>
              <y-time-picker range :filter-time="filterRangeTime" v-model="time7" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>filter-time</code>，传递一个函数，参数有3个：
              <br />第一个参数为时间值，范围在[0-23]或[0-59]，
              <br />第二个参数为时间类型，值为
              <code>hour</code>、
              <code>minute</code>、
              <code>second</code>，
              <br />第三个参数为排序，在设置
              <code>range</code>后需要，可分别对左右时间进行设置，值为
              <code>first</code>、
              <code>second</code> 。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('SJGL').height}">
            <code-action-bar :name="getNav('SJGL').name" />
            <pre>
            <code>
  &lt;y-time-picker :filter-time="filterTime" v-model="time6" /&gt;
  &lt;y-time-picker range :filter-time="filterRangeTime" v-model="time7" /&gt;

  export default {
    data() {
      return {
        time6: '',
        time7: '',
      }
    },
    methods: {
      filterTime(num, type) {
        if (type == "hour") {
          return num &gt; 8;
        }
        return true;
      },
      filterRangeTime(num, type, order) {
        // 设置第一个时间选择框
        if (order == "first") {
          if (type == "hour") {
            return num &gt; 8;
          } else return true;
        }
        // 设置第二个时间选择框
        else {
          if (type == "hour") {
            return num &lt; 22;
          } else return true;
        }
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table
        :name="$options.name"
        :propList="filterVersion(propList)"
        :eventList="filterVersion(eventList)"
        :slotList="filterVersion(slotList)"
      ></footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/mixins/view";
export default {
  name: "TimePicker",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      time1: "",
      time2: [],
      time3: "",
      time4: "",
      time5: "",
      time6: "",
      time7: "",
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "150px"
        },
        {
          id: "FWXZ",
          name: "范围选择",
          version: "1.0.0",
          height: "150px"
        },
        {
          id: "SJGS",
          name: "时间格式",
          version: "1.0.0",
          height: "320px"
        },
        {
          id: "JY",
          name: "禁用",
          version: "1.0.0",
          height: "150px"
        },
        {
          id: "SJGL",
          name: "时间过滤",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "PROPS",
          name: "TimePicker Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "TimePicker Slots",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "TimePicker Events",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          attr: "value",
          explain: `绑定的值，可使用 <code class="keyword-code">v-model</code> 双向绑定`,
          type: "String",
          default: "-"
        },
        {
          attr: "type",
          explain: `时间类型，可选值为 <code class="keyword-code">year</code>、<code class="keyword-code">month</code>、<code class="keyword-code">date</code>、<code class="keyword-code">datetime</code>、<code class="keyword-code">yearrange</code>、<code class="keyword-code">monthrange</code>、<code class="keyword-code">daterange</code>、<code class="keyword-code">datetimerange</code>`,
          type: "String",
          default: "date"
        },
        {
          version: "1.0.0",
          attr: "size",
          explain: `展示类型，可选<code class="keyword-code">large</code>大、<code class="keyword-code">small</code>小、<code class="keyword-code">mini</code>极小`,
          type: "String",
          default: "空"
        },
        {
          version: "1.0.0",
          attr: "width",
          explain: `宽度`,
          type: "String",
          default: "auto"
        },
        {
          version: "1.0.0",
          attr: "disabled",
          explain: `禁用开关`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "multiple",
          explain: `是否多选，当为范围选择时不可用`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "placeholder",
          explain: `占位文本`,
          type: "String",
          default: "请选择"
        },
        {
          version: "1.0.0",
          attr: "format",
          explain: `时间格式`,
          type: "String",
          default: "yyyy-MM-dd hh:mm:ss"
        },
        {
          version: "1.0.0",
          attr: "clearable",
          explain: `是否显示清空按钮`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "immediate",
          explain: `是否选择即变化`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "hide-footer",
          explain: `是否隐藏底部操作栏`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "filter-time",
          explain: `设置时间过滤函数`,
          type: "Function",
          default: "-"
        }
      ],
      eventList: [
        {
          attr: "on-change",
          explain: "时间发生变化后的回调",
          return: "时间值"
        },
        {
          attr: "on-visible-change",
          explain: "时间弹出框显示或隐藏的回调",
          return: "true | false"
        },
        {
          attr: "on-clear",
          explain: "点击清空按钮的回调",
          return: "无"
        }
      ],
      slotList: [
        {
          attr: "footer",
          explain: "自定义底部操作栏"
        }
      ]
    };
  },
  methods: {
    filterTime(num, type) {
      if (type == "hour") {
        return num > 8;
      }
      return true;
    },
    filterRangeTime(num, type, order) {
      // 设置第一个时间选择框
      if (order == "first") {
        if (type == "hour") {
          return num > 8;
        } else return true;
      }
      // 设置第二个时间选择框
      else {
        if (type == "hour") {
          return num < 22;
        } else return true;
      }
    }
  }
};
</script>