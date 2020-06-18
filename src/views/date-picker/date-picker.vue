<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>DatePicker 时间选择器</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <p>选择年</p>
              <y-date-picker type="year" v-model="date1" />
              <p>选择月</p>
              <y-date-picker type="month" v-model="date2" />
              <p>选择日</p>
              <y-date-picker v-model="date3" />
              <p>选择时间</p>
              <y-date-picker type="datetime" v-model="date4" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              最基本的日期选择器，通过
              <code>v-model</code>绑定数据，
              传递
              <code>type</code>为
              <code>year</code>或
              <code>month</code>或
              <code>datetime</code>可选择年月日时间。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;p&gt;选择年&lt;/p&gt;
  &lt;y-date-picker type="year" v-model="date1" /&gt;
  &lt;p&gt;选择月&lt;/p&gt;
  &lt;y-date-picker type="month" v-model="date2" /&gt;
  &lt;p&gt;选择日&lt;/p&gt;
  &lt;y-date-picker v-model="date3" /&gt;
  &lt;p&gt;选择时间&lt;/p&gt;
  &lt;y-date-picker type="datetime" v-model="date4" /&gt;

  export default {
    data() {
      return {
        date1: '',
        date2: '',
        date3: '',
        date4: '',
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
              <p>选择年范围</p>
              <y-date-picker type="yearrange" v-model="date5" />
              <p>{{date5}}</p>
              <y-divider />
              <p>选择月范围</p>
              <y-date-picker type="monthrange" v-model="date6" />
              <p>{{date6}}</p>
              <y-divider />
              <p>选择日范围</p>
              <y-date-picker type="daterange" v-model="date7" />
              <p>{{date7}}</p>
              <y-divider />
              <p>选择时间范围</p>
              <y-date-picker type="datetimerange" v-model="date8" />
              <p>{{date8}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              传递
              <code>type</code>为
              <code>yearrange</code>、
              <code>monthrange</code>、
              <code>daterange</code>、
              <code>datetimerange</code>可选择时间范围。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('FWXZ').height}">
            <code-action-bar :name="getNav('FWXZ').name" />
            <pre v-pre>
            <code>
  &lt;p&gt;选择年范围&lt;/p&gt;
  &lt;y-date-picker type="yearrange" v-model="date5" /&gt;
  &lt;p&gt;{{date5}}&lt;/p&gt;

  &lt;p&gt;选择月范围&lt;/p&gt;
  &lt;y-date-picker type="monthrange" v-model="date6" /&gt;
  &lt;p&gt;{{date6}}&lt;/p&gt;

  &lt;p&gt;选择日范围&lt;/p&gt;
  &lt;y-date-picker type="daterange" v-model="date7" /&gt;
  &lt;p&gt;{{date7}}&lt;/p&gt;

  &lt;p&gt;选择时间范围&lt;/p&gt;
  &lt;y-date-picker type="datetimerange" v-model="date8" /&gt;
  &lt;p&gt;{{date8}}&lt;/p&gt;

  export default {
    data() {
      return {
        date5: [],
        date6: [],
        date7: [],
        date8: [],
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('DX')">
        <h3 id="DX">{{getNav('DX').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <p>选择年</p>
              <y-date-picker multiple type="year" v-model="date9" />
              <p>{{date9}}</p>
              <y-divider />
              <p>选择月</p>
              <y-date-picker multiple type="month" v-model="date10" />
              <p>{{date10}}</p>
              <y-divider />
              <p>选择日</p>
              <y-date-picker multiple v-model="date11" />
              <p>{{date11}}</p>
              <y-divider />
              <p>选择时间</p>
              <y-date-picker multiple type="datetime" v-model="date12" />
              <p>{{date12}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>multiple</code>可开启多选，范围选择不支持此属性。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('DX').height}">
            <code-action-bar :name="getNav('DX').name" />
            <pre v-pre>
            <code>
  &lt;p&gt;选择年&lt;/p&gt;
  &lt;y-date-picker multiple type="year" v-model="date9" /&gt;
  &lt;p&gt;{{date9}}&lt;/p&gt;
  
  &lt;p&gt;选择月&lt;/p&gt;
  &lt;y-date-picker multiple type="month" v-model="date10" /&gt;
  &lt;p&gt;{{date10}}&lt;/p&gt;
  
  &lt;p&gt;选择日&lt;/p&gt;
  &lt;y-date-picker multiple v-model="date11" /&gt;
  &lt;p&gt;{{date11}}&lt;/p&gt;
  
  &lt;p&gt;选择时间&lt;/p&gt;
  &lt;y-date-picker multiple type="datetime" v-model="date12" /&gt;
  &lt;p&gt;{{date12}}&lt;/p&gt;

  export default {
    data() {
      return {
        date9: [],
        date10: [],
        date11: [],
        date12: [],
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('RQGS')">
        <h3 id="RQGS">{{getNav('RQGS').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <p>yyyy年</p>
              <y-date-picker format="yyyy年" type="year" v-model="date13" />
              <p>实际的值为：{{date13}}</p>
              <y-divider />
              <p>yyyy年MM月</p>
              <y-date-picker format="yyyy年MM月" type="month" v-model="date14" />
              <p>实际的值为：{{date14}}</p>
              <y-divider />
              <p>yyyy年MM月dd日</p>
              <y-date-picker format="yyyy年MM月dd日" v-model="date15" />
              <p>实际的值为：{{date15}}</p>
              <y-divider />
              <p>yyyy年MM月dd日 hh时mm分</p>
              <y-date-picker format="yyyy年MM月dd日 hh时mm分" type="datetime" v-model="date16" />
              <p>实际的值为：{{date16}}</p>
              <y-divider />
              <p>yyyy年MM月dd日 hh时mm分ss秒</p>
              <y-date-picker format="yyyy年MM月dd日-hh时mm分ss秒" type="datetime" v-model="date17" />
              <p>实际的值为：{{date17}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>format</code>可以改变日期的显示格式。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('RQGS').height}">
            <code-action-bar :name="getNav('RQGS').name" />
            <pre v-pre>
            <code>
  &lt;p&gt;yyyy年&lt;/p&gt;
  &lt;y-date-picker format="yyyy年" type="year" v-model="date13" /&gt;
  &lt;p&gt;实际的值为：{{date13}}&lt;/p&gt;

  &lt;p&gt;yyyy年MM月&lt;/p&gt;
  &lt;y-date-picker format="yyyy年MM月" type="month" v-model="date14" /&gt;
  &lt;p&gt;实际的值为：{{date14}}&lt;/p&gt;

  &lt;p&gt;yyyy年MM月dd日&lt;/p&gt;
  &lt;y-date-picker format="yyyy年MM月dd日" v-model="date15" /&gt;
  &lt;p&gt;实际的值为：{{date15}}&lt;/p&gt;

  &lt;p&gt;yyyy年MM月dd日 hh时mm分&lt;/p&gt;
  &lt;y-date-picker format="yyyy年MM月dd日 hh时mm分" type="datetime" v-model="date16" /&gt;
  &lt;p&gt;实际的值为：{{date16}}&lt;/p&gt;

  &lt;p&gt;yyyy年MM月dd日 hh时mm分ss秒&lt;/p&gt;
  &lt;y-date-picker format="yyyy年MM月dd日-hh时mm分ss秒" type="datetime" v-model="date17" /&gt;
  &lt;p&gt;实际的值为：{{date17}}&lt;/p&gt;

  export default {
    data() {
      return {
        date13: "",
        date14: "",
        date15: "",
        date16: "",
        date17: "",
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
              <y-date-picker disabled :value="new Date()" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>disabled</code>可以禁用日期选择。
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
      <div v-show="compareVersion('JYHS')">
        <h3 id="JYHS">{{getNav('JYHS').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <p>禁用现在之后的日期</p>
              <y-date-picker :disabled-date="handleDisabled" v-model="date18" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>handleDisabled</code>，传递一个函数，参数为当前日期，返回为true则为禁用。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JYHS').height}">
            <code-action-bar :name="getNav('JYHS').name" />
            <pre>
            <code>
  &lt;y-date-picker :disabled-date="handleDisabled" v-model="date18" /&gt;

  export default {
    data() {
      return {
        date18: ''
      }
    },
    methods: {
      handleDisabled(date) {
        return date.getTime() > new Date().getTime();
      }
    }
  }
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
              <y-date-picker :filter-time="filterTime" v-model="date19" type="datetime" />
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置属性
              <code>filter-time</code>，传递一个函数，参数为hour | minute | second，返回值可以是数字或数组。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('SJGL').height}">
            <code-action-bar :name="getNav('SJGL').name" />
            <pre>
            <code>
  &lt;y-date-picker :filter-time="filterTime" v-model="date19" type="datetime" /&gt;

  export default {
    data() {
      return {
        date19: ''
      }
    },
    methods: {
      filterTime(type) {
        if (type == "hour") {
          return 12;
        } else if (type == "minute") {
          return [0, 10, 20, 30, 40, 50];
        } else return [0, 30];
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
      ></footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/util/viewMixins";
export default {
  name: "DatePicker",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      date1: "",
      date2: "",
      date3: "",
      date4: "",
      date5: [],
      date6: [],
      date7: [],
      date8: [],
      date9: [],
      date10: [],
      date11: [],
      date12: [],
      date13: "",
      date14: "",
      date15: "",
      date16: "",
      date17: "",
      date18: "",
      date19: "",
      date20: "",
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "380px"
        },
        {
          id: "FWXZ",
          name: "范围选择",
          version: "1.0.0",
          height: "580px"
        },
        {
          id: "DX",
          name: "多选",
          version: "1.0.0",
          height: "580px"
        },
        {
          id: "RQGS",
          name: "日期格式",
          version: "1.0.0",
          height: "700px"
        },
        {
          id: "JY",
          name: "禁用",
          version: "1.0.0",
          height: "150px"
        },
        {
          id: "JYHS",
          name: "禁用函数",
          version: "1.0.0",
          height: "180px"
        },
        {
          id: "SJGL",
          name: "时间过滤",
          version: "1.0.0",
          height: "150px"
        },
        {
          id: "PROPS",
          name: "DatePicker Props",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "DatePicker Events",
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
          default: "100%"
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
          explain: `日期格式`,
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
          attr: "disabled-date",
          explain: `设置不可选的日期函数`,
          type: "Function",
          default: "-"
        },
        {
          version: "1.0.0",
          attr: "filter-time",
          explain: `设置时间选择项函数`,
          type: "Function",
          default: "-"
        }
      ],
      eventList: [
        {
          attr: "on-change",
          explain: "日期发生变化后的回调",
          return: "日期值"
        },
        {
          attr: "on-visible-change",
          explain: "日期弹出框显示或隐藏的回调",
          return: "true | false"
        },
        {
          attr: "on-clear",
          explain: "点击清空按钮的回调",
          return: "无"
        }
      ]
    };
  },
  methods: {
    handleDisabled(date) {
      return date.getTime() > new Date().getTime();
    },
    filterTime(type) {
      if (type == "hour") {
        return 12;
      } else if (type == "minute") {
        return [0, 10, 20, 30, 40, 50];
      } else return [0, 30];
    }
  }
};
</script>