<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article">
      <h1>Timeline 时间轴列表</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-timeline :data="timeList">
                <div slot-scope="{row}">{{row.title}}</div>
              </y-timeline>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过传递
              <code>data</code>属性生成列表并通过
              <code>slot-scope="{row, index}"</code>来获取每一项。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre v-pre>
            <code>
  &lt;y-timeline :data="timeList"&gt;
    &lt;div slot-scope="{row}"&gt;{{row.title}}&lt;/div&gt;
  &lt;/y-timeline&gt;

  export default {
    data() {
      return {
        timeList: [
          {
            time: "2020-05-14 12:15:14",
            title: "右侧内容1"
          },
          {
            time: "2020-05-14 15:34:52",
            title: "右侧内容2"
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
              <y-timeline :data="timeList" type="card">
                <div slot-scope="{row}">{{row.title}}</div>
              </y-timeline>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>type</code>属性为
              <code>card</code>生成卡片类列表。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre v-pre>
            <code>
  &lt;y-timeline :data="timeList" type="card"&gt;
    &lt;div slot-scope="{row}"&gt;{{row.title}}&lt;/div&gt;
  &lt;/y-timeline&gt;
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
              <y-timeline :data="timeList" :leftWidth="80">
                <p slot="left" slot-scope="{row}">{{row.time}}</p>
                <div slot-scope="{row}">{{row.title}}</div>
              </y-timeline>
              <y-timeline :data="timeList" :leftWidth="80" type="card">
                <p slot="left" slot-scope="{row}">{{row.time}}</p>
                <div slot-scope="{row}">{{row.title}}</div>
              </y-timeline>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>slot</code>属性为
              <code>left</code>生成左侧内容。
              <br />注意： 必须指定
              <code>leftWidth</code>的值，其代表左侧栏的宽度。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre v-pre>
            <code>
  &lt;y-timeline :data="timeList" :leftWidth="80"&gt;
    &lt;p slot="left" slot-scope="{row}"&gt;{{row.time}}&lt;/p&gt;
    &lt;div slot-scope="{row}"&gt;{{row.title}}&lt;/div&gt;
  &lt;/y-timeline&gt;
  &lt;y-timeline :data="timeList" :leftWidth="80" type="card"&gt;
    &lt;p slot="left" slot-scope="{row}"&gt;{{row.time}}&lt;/p&gt;
    &lt;div slot-scope="{row}"&gt;{{row.title}}&lt;/div&gt;
  &lt;/y-timeline&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <ul class="code-navigation">
      <li v-for="nav in navList" :key="nav.id">{{nav.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.4"
        },
        {
          id: "CPLX",
          name: "卡片类型",
          version: "0.1.4"
        },
        {
          id: "ZCL",
          name: "左侧栏",
          version: "0.1.4"
        }
      ],
      timeList: [
        {
          time: "2020-05-14 12:15:14",
          title: "右侧内容1"
        },
        {
          time: "2020-05-14 15:34:52",
          title: "右侧内容2"
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