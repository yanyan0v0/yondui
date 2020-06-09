<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Chart 图表</h1>
      <y-alert>图表组件是基于echarts封装的一套组件，没有多余的初始化过程，现在只需要传递一些参数就可以生成好看的图表了。</y-alert>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JCFL')">
        <h3 id="JCFL">{{getNav('JCFL').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <div class="flex" :style="{height: '200px'}">
                <y-chart :data="{type: 'bar', title: '柱状图', data: chartData}"></y-chart>
                <y-chart :data="{type: 'line', title: '折线图', data: chartData}"></y-chart>
              </div>
              <div class="flex" :style="{height: '200px'}">
                <y-chart :data="{type: 'pie', title: '饼状图', data: chartData}"></y-chart>
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过传递
              <code>data</code>属性生成表格， 其中数据格式必须以
              <code>name</code>、
              <code>value</code>的键值对表示，
              目前
              <code>type</code>属性只支持
              <code>bar</code>柱状图、
              <code>line</code>折线图、
              <code>pie</code>饼状图、
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JCFL').height}">
            <code-action-bar :name="getNav('JCFL').name" />
            <pre>
            <code>
  &lt;y-chart :data="{type: 'bar', title: '柱状图', data: chartData}"&gt;&lt;/y-chart&gt;
  &lt;y-chart :data="{type: 'line', title: '折线图', data: chartData}"&gt;&lt;/y-chart&gt;
  &lt;y-chart :data="{type: 'pie', title: '饼状图', data: chartData}"&gt;&lt;/y-chart&gt;

  export default {
    data() {
      return {
        chartData: [
          {
            name: "类型1",
            value: 10
          },
          {
            name: "类型2",
            value: 20
          },
          {
            name: "类型3",
            value: 30
          },
          {
            name: "类型4",
            value: 24
          },
          {
            name: "类型5",
            value: 15
          }
        ]
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('XSTL')">
        <h3 id="XSTL">{{getNav('XSTL').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <div class="flex" :style="{height: '200px'}">
                <y-chart :data="{type: 'bar', legend: ['类型1', '类型2'], data: chartData1}"></y-chart>
                <y-chart :data="{type: 'line', legend: ['类型1', '类型2'], data: chartData1}"></y-chart>
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>legend</code>属性生成图例，必须为数组、只支持柱状图和饼状图。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('XSTL').height}">
            <code-action-bar :name="getNav('XSTL').name" />
            <pre>
            <code>
  &lt;y-chart :data="{type: 'bar', legend: ['类型1', '类型2'], data: chartData}"&gt;&lt;/y-chart&gt;
  &lt;y-chart :data="{type: 'line', legend: ['类型1', '类型2'], data: chartData}"&gt;&lt;/y-chart&gt;

  export default {
    data() {
      return {
        chartData: [
          {
            name: "类型1",
            value: [10, 20]
          },
          {
            name: "类型2",
            value: [20, 42]
          },
          {
            name: "类型3",
            value: [30, 35]
          },
          {
            name: "类型4",
            value: [40, 30]
          },
          {
            name: "类型5",
            value: [15, 10]
          }
        ]
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('FZQK')">
        <h3 id="FZQK">{{getNav('FZQK').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <div class="flex" :style="{height: '200px'}">
                <y-chart :data="chartData2"></y-chart>
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">值得注意的是y轴数据会自动过万处理， 并在单位上加上‘万’。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('FZQK').height}">
            <code-action-bar :name="getNav('FZQK').name" />
            <pre>
            <code>
  &lt;y-chart :data="chartData2"&gt;&lt;/y-chart&gt;

  export default {
    data() {
      return {
        chartData2: {
          title: "xx景区入园情况分析图表",
          type: ["bar", "line"],
          unit: ["人", "%"],
          legend: ["景区入园人数", "同比"],
          data: [
            {
              name: "1月",
              value: [100000, 20]
            },
            {
              name: "2月",
              value: [200000, 42]
            },
            {
              name: "3月",
              value: [300000, 35]
            },
            {
              name: "4月",
              value: [400000, 30]
            },
            {
              name: "5月",
              value: [150000, 10]
            }
          ]
        }
      };
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
        :slotList="filterVersion(slotList)"
        :eventList="filterVersion(eventList)"
      >
        <template slot="top">
          <div v-if="propList.length">
            <h3 id="BLPROPS">{{getNav('BLPROPS').name}}</h3>
            <y-table :data="filterVersion(propList)" :columns="propColumns"></y-table>
          </div>

          <div v-if="piePropList.length">
            <h3 id="PPROPS">{{getNav('PPROPS').name}}</h3>
            <y-table :data="filterVersion(piePropList)" :columns="propColumns"></y-table>
          </div>
        </template>
      </footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS } from "@/util/config";
import viewMixins from "@/util/viewMixins";
export default {
  name: "Chart",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      chartData: [
        {
          name: "类型1",
          value: 10
        },
        {
          name: "类型2",
          value: 20
        },
        {
          name: "类型3",
          value: 30
        },
        {
          name: "类型4",
          value: 24
        },
        {
          name: "类型5",
          value: 15
        }
      ],
      chartData1: [
        {
          name: "类型1",
          value: [10, 20]
        },
        {
          name: "类型2",
          value: [20, 42]
        },
        {
          name: "类型3",
          value: [30, 35]
        },
        {
          name: "类型4",
          value: [40, 30]
        },
        {
          name: "类型5",
          value: [15, 10]
        }
      ],
      chartData2: {
        title: "xx景区入园情况分析图表",
        type: ["bar", "line"],
        yUnit: ["人", "%"],
        legend: ["景区入园人数", "同比"],
        data: [
          {
            name: "1月",
            value: [100000, 20]
          },
          {
            name: "2月",
            value: [200000, 42]
          },
          {
            name: "3月",
            value: [300000, 35]
          },
          {
            name: "4月",
            value: [400000, 30]
          },
          {
            name: "5月",
            value: [150000, 10]
          }
        ]
      },
      propColumns: PROP_COLUMNS,
      propList: [
        {
          attr: "title",
          explain: "标题",
          type: "String",
          default: "空"
        },
        {
          attr: "type",
          explain: `图表类型，可以是<code class="keyword-code">bar</code>、<code class="keyword-code">line</code>、<code class="keyword-code">pie</code>，当为数组时，只支持<code class="keyword-code">bar</code>、<code class="keyword-code">line</code>组成的2项数组`,
          type: "String | Array",
          default: "bar"
        },
        {
          attr: "yUnit",
          explain: "y轴单位，当为2项数组时分别对应左右y轴",
          type: "String | Array",
          default: "个"
        },
        {
          attr: "xUnit",
          explain: "x轴单位或名称",
          type: "String | Array",
          default: "空"
        },
        {
          attr: "hideRadius",
          explain: "柱状图隐藏圆角",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "legend",
          explain:
            "类目，存在时默认不显示label，数组内必须是字符串类型，位置默认在图表下方",
          type: "Array",
          default: "[]"
        },
        {
          attr: "hideLabel",
          explain: "隐藏label",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "showStack",
          explain: "是否堆叠柱状图，当legend存在时使用，只适用于柱状图",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "showArea",
          explain: "每个数据列是否显示面积，只适用于折线图",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "showDiffColor",
          explain: "每个数据列是否显示不同的颜色",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "top",
          explain: "容器据顶部的距离，单位px",
          type: "Number",
          default: "60"
        },
        {
          attr: "left",
          explain: "容器据左边的距离，单位px",
          type: "Number",
          default: "40"
        },
        {
          attr: "bottom",
          explain: "容器据底部的距离，默认为30，legend存在时默认为50，单位px",
          type: "Number",
          default: "30"
        },
        {
          attr: "xRotate",
          explain: "X轴刻度名的旋转角度，当刻度名过长时使用",
          type: "Number",
          default: "0"
        },
        {
          attr: "xLength",
          explain: "X轴刻度名的截取的长度，当刻度名过长时使用",
          type: "Number",
          default: "-"
        },
        {
          attr: "showToolbox",
          explain: "是否显示工具栏",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "labelColor",
          explain: "label文字的颜色",
          type: "String",
          default: "#808695"
        },
        {
          attr: "colors",
          explain:
            "自定义每一项的颜色，当每一项为2项数组时， 在柱状图中可以实现渐变",
          type: "Array",
          default: "[]"
        },
        {
          attr: "showMarkPoint",
          explain: "是否标注最大值和最小值",
          type: "Boolean",
          default: "false"
        }
      ],
      piePropList: [
        {
          attr: "title",
          explain: "标题",
          type: "String",
          default: "空"
        },
        {
          attr: "orient",
          explain: `legend排列方式，<code class="keyword-code">vertical</code>垂直、<code class="keyword-code">horizontal</code>水平`,
          type: "String",
          default: "vertical"
        },
        {
          attr: "outerRadius",
          explain: "外圈半径",
          type: "String",
          default: "50%"
        },
        {
          attr: "innerRadius",
          explain: "内圈半径",
          type: "String",
          default: "30%"
        },
        {
          attr: "showCustomColor",
          explain: "是否显示自定义颜色",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "hideLabel",
          explain: "隐藏label",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "hideLegend",
          explain: "隐藏hideLegend",
          type: "Boolean",
          default: "false"
        },
        {
          attr: "centerY",
          explain: "圆心Y方向位置",
          type: "String",
          default: "50%"
        },
        {
          attr: "formatter",
          explain: `label展示文本格式，详情见<a href="https://echarts.apache.org/zh/option.html#series-pie.label.formatter" target="_blank" class="keyword-a">formatter</a>`,
          type: "String",
          default: "{b}\\n{d}%"
        },
        {
          attr: "tooltipFormatter",
          explain: `tooltip展示文本格式，详情见<a href="https://echarts.apache.org/zh/option.html#tooltip.formatter" target="_blank" class="keyword-a">tooltipFormatter</a>`,
          type: "String",
          default: "{a} <br/>{b}: {c} ({d}%)"
        },
        {
          attr: "top",
          explain: "legend位置，可选值 具体的值/百分比/auto/top/middle/bottom",
          type: "String",
          default: "middle"
        },
        {
          attr: "label位置",
          explain: `label位置，<code class="keyword-code">outside</code>外部、<code class="keyword-code">inside</code>内部`,
          type: "String",
          default: "outside"
        },
        {
          attr: "borderWidth",
          explain: "边框颜色",
          type: "Number",
          default: "0"
        },
        {
          attr: "borderColor",
          explain: "边框颜色",
          type: "String",
          default: "#fff"
        },
        {
          attr: "colors",
          explain: "自定义每一项的颜色",
          type: "Array",
          default: "[]"
        },
        {
          attr: "smallerData",
          explain: "设置双环饼图的额外参数，参数等同上所示",
          type: "Object",
          default: "{}"
        }
      ],
      slotList: [
        {
          attr: "header",
          explain: "标题内容"
        }
      ],
      eventList: [
        {
          attr: "on-click",
          explain: "点击单条数据时的回调函数",
          return: "数据列的具体参数"
        }
      ],
      navList: [
        {
          id: "JCFL",
          name: "基本分类",
          version: "1.0.0",
          height: "500px"
        },
        {
          id: "XSTL",
          name: "显示图例",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "FZQK",
          name: "复杂情况",
          version: "1.0.0",
          height: "300px"
        },
        {
          id: "BLPROPS",
          name: "Bar/Line Data Props",
          version: "1.0.0"
        },
        {
          id: "PPROPS",
          name: "Pie Data Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Chart Slots",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Chart Events",
          version: "1.0.0"
        }
      ]
    };
  }
};
</script>