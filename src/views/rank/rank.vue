<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Rank 排行</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-rank :data="rankList"></y-rank>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过传递
              <code>data</code>属性生成列表。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[0].height}">
            <pre>
            <code>
  &lt;y-rank :data="rankList"&gt;&lt;/y-rank&gt;

  export default {
    data() {
      return {
        rankList: [
          {
            value: 123,
            name: "类型1"
          },
          {
            value: 210,
            name: "类型2"
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
      <div v-show="navList[1].version >= version">
        <h3 :id="navList[1].id">{{navList[1].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-rank :data="rankList" text-place="inner"></y-rank>
              <y-divider />
              <y-rank :data="rankList" text-place="none"></y-rank>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>text-place</code>属性改变值的位置，
              <code>inner</code>在内显示、
              <code>none</code>不显示
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-rank :data="rankList" text-place="inner"&gt;&lt;/y-rank&gt;
  &lt;y-rank :data="rankList" text-place="none"&gt;&lt;/y-rank&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[2].version >= version">
        <h3 :id="navList[2].id">{{navList[2].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-rank :data="rankList" direction="column"></y-rank>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>direction</code>属性改变标题的位置，
              <code>row</code>左右排列（默认）、
              <code>column</code>上下排列
              。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-rank :data="rankList" direction="column"&gt;&lt;/y-rank&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <h2>API</h2>
      <!-- 分割线 -->
      <div v-show="navList[3].version >= version">
        <h3 :id="navList[3].id">{{navList[3].name}}</h3>
        <y-table :data="propList" :columns="propColumns"></y-table>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[4].version >= version">
        <h3 :id="navList[4].id">{{navList[4].name}}</h3>
        <y-table :data="slotList" :columns="slotColumns"></y-table>
      </div>

      <!-- 分割线 -->
      <div v-show="navList[5].version >= version">
        <h3 :id="navList[5].id">{{navList[5].name}}</h3>
        <y-table :data="eventList" :columns="eventColumns"></y-table>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="navList"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS, SLOT_COLUMNS, EVENT_COLUMNS } from "@ui/util/config";
export default {
  data() {
    return {
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.4",
          height: "180px"
        },
        {
          id: "ZXSWZ",
          name: "值显示位置",
          version: "0.1.4"
        },
        {
          id: "BTXSWZ",
          name: "标题显示位置",
          version: "0.1.4"
        },
        {
          id: "PROPS",
          name: "Rank Props",
          version: "0.1.4"
        },
        {
          id: "SLOTS",
          name: "Rank Slots",
          version: "0.1.4"
        },
        {
          id: "EVENTS",
          name: "Rank Events",
          version: "0.1.4"
        }
      ],
      rankList: [
        {
          value: 123,
          name: "类型1"
        },
        {
          value: 210,
          name: "类型2"
        }
      ],
      propColumns: PROP_COLUMNS,
      slotColumns: SLOT_COLUMNS,
      eventColumns: EVENT_COLUMNS,
      propList: [
        {
          attr: "data",
          explain: "显示的结构化数据",
          type: "Array",
          default: "[]"
        },
        {
          attr: "text-place",
          explain: `值的位置，<code class="keyword-code">outer</code>在外显示、<code class="keyword-code">inner</code>在内显示、 <code class="keyword-code">none</code>不显示`,
          type: "String",
          default: "outer"
        },
        {
          attr: "direction",
          explain: `值的位置，<code class="keyword-code">row</code>左右排列、<code class="keyword-code">column</code>上下排列 `,
          type: "String",
          default: "row"
        },
        {
          attr: "hide-rank-icon",
          explain: `隐藏排名图标`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "text-type",
          explain: `后面的值显示类型，<code class="keyword-code">number</code>具体指、<code class="keyword-code">percent</code>百分比`,
          type: "String",
          default: "number"
        },
        {
          attr: "only-show",
          explain: `当<code class="keyword-code">data</code>传递的<code class="keyword-code">value</code>值为百分比时，组件便不再计算其所占比例`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "colors",
          explain: `颜色列表，每一列会按顺序显示不同颜色，默认每一项为二项数组来实现渐变`,
          type: "Array",
          default: "[...[Array]]"
        },
        {
          attr: "show-top3",
          explain: `前3列是否显示不同的图标，若设为<code class="keyword-code">false</code>则会显示默认的<code class="keyword-code">#fa795e</code>`,
          type: "Boolean",
          default: "true"
        },
        {
          attr: "height",
          explain: `每一列图像的高度，单位px`,
          type: "Number",
          default: "15"
        },
        {
          attr: "left-width",
          explain: `每一列标题的宽度，单位px，只适用于<code class="keyword-code">direction</code>为<code class="keyword-code">row</code>的时候`,
          type: "Number",
          default: "60"
        },
        {
          attr: "slice",
          explain: `每一列标题截取字符串的长度，0代表不截取`,
          type: "Number",
          default: "0"
        },
        {
          attr: "active-class",
          explain: `自定义点击后的class`,
          type: "String",
          default: "true"
        }
      ],
      slotList: [
        {
          attr: "title",
          explain: "左侧标题内容",
          type: "String",
          default: "-"
        }
      ],
      eventList: [
        {
          attr: "on-click",
          explain: "单击后触发",
          return: `<ul class="default-ul"><li>当前行数据</li></ul>`
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