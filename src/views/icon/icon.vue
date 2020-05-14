<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article">
      <h1>Icon 图标</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-icon type="tianjia"></y-icon>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>type</code>属性生成不同图标。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-icon type="tianjia"&gt;&lt;/y-icon&gt;
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