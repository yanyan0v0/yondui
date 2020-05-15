<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article">
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
          <div slot="card2" v-highlight class="code-card">
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
          id: "XSWZ",
          name: "显示位置",
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