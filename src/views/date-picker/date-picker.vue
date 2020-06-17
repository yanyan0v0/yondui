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
              <y-button @click="date1 = '2012-01-05'">change</y-button>
              <p>{{date1}}</p>
              <p>选择月</p>
              <y-date-picker type="month" v-model="date2" />
              <y-button @click="date2 = '2012-01-05'">change</y-button>
              <p>{{date2}}</p>
              <p>选择日</p>
              <y-date-picker v-model="date3" />
              <y-button @click="date3 = '2012-01-05'">change</y-button>
              <p>{{date3}}</p>
              <p>选择时间</p>
              <y-date-picker type="datetime" v-model="date4" />
              <y-button @click="date4 = '2012-01-05 12:05:45'">change</y-button>
              <p>{{date4}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              最基本的时间选择器，通过
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

  export defalut {
    data() {
      return {
        date1: '',
        date2: '',
        date3: ''
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
              <y-button @click="date5 = ['2012', '2015']">change</y-button>
              <p>{{date5}}</p>
              <p>选择月范围</p>
              <y-date-picker type="monthrange" v-model="date6" />
              <y-button @click="date6 = ['2012-05', '2012-02']">change</y-button>
              <p>{{date6}}</p>
              <p>选择日范围</p>
              <y-date-picker type="daterange" v-model="date7" />
              <y-button @click="date7 = ['2015-05-05', '2015-05-16']">change</y-button>
              <p>{{date7}}</p>
              <p>选择时间范围</p>
              <y-date-picker type="datetimerange" v-model="date8" />
              <y-button @click="date8 = ['2012-01-05 15:12:56', '2015-05-16 11:12:13']">change</y-button>
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
            <pre>
            <code>
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
              <y-button @click="date9 = ['2012', '2015']">change</y-button>
              <p>{{date9}}</p>
              <p>选择月</p>
              <y-date-picker multiple type="month" v-model="date10" />
              <y-button @click="date10 = ['2012-02', '2015-09']">change</y-button>
              <p>{{date10}}</p>
              <p>选择日</p>
              <y-date-picker multiple v-model="date11" />
              <y-button @click="date11 = ['2012-02-22', '2015-01-27']">change</y-button>
              <p>{{date11}}</p>
              <p>选择时间</p>
              <y-date-picker multiple type="datetime" v-model="date12" />
              <y-button @click="date12 = ['2012-02-22 12:03:00', '2015-01-27 15:45:34']">change</y-button>
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
            <pre>
            <code>
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
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "FWXZ",
          name: "范围选择",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "DX",
          name: "多选",
          version: "1.0.0",
          height: "300px"
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
          attr: "show-footer",
          explain: `是否显示底部确认按钮`,
          type: "Boolean",
          default: "false"
        }
      ],
      eventList: [
        {
          attr: "on-change",
          explain: "颜色发生变化后的回调",
          return: "当前颜色值"
        },
        {
          attr: "on-confirm",
          explain: "点击确定按钮的回调",
          return: "当前颜色值"
        }
      ]
    };
  }
};
</script>