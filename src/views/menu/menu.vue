<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Menu 图标</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="navList[0].version >= version">
        <h3 :id="navList[0].id">{{navList[0].name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-menu v-model="menu1" :data="menuList"></y-menu>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>v-model</code>绑定激活的菜单，
              通过传递
              <code>data</code>属性生成菜单列表。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[0].height}">
            <pre>
            <code>
  &lt;y-menu v-model="menu1" :data="menuList" &gt;&lt;/y-menu&gt;

  export default {
    data() {
      return {
        menuList: [
          {
            id: 1,
            name: "主菜单1"
          },
          {
            id: 2,
            name: "主菜单2",
            children: [
              {
                id: 21,
                name: "子菜单2-1"
              },
              {
                id: 22,
                name: "子菜单2-2"
              }
            ]
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
              <y-menu v-model="menu2" :data="menuList" type="column-fixed"></y-menu>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>type</code>属性：
              <code>column-flex</code>竖向可伸缩（默认）、
              <code>column-fixed</code>竖向不可伸缩来生成不同样式。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card">
            <pre>
            <code>
  &lt;y-menu v-model="menu2" :data="menuList" type="column-fixed"&gt;&lt;/y-icon&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <h2>API</h2>
      <div v-show="navList[2].version >= version">
        <h3 :id="navList[2].id">{{navList[2].name}}</h3>
        <y-table :data="propList" :columns="columns"></y-table>
      </div>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="navList"></y-nav>
  </div>
</template>

<script>
import { PROP_COLUMNS } from "@/util/config";
export default {
  data() {
    return {
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.4",
          height: "200px"
        },
        {
          id: "ZSLX",
          name: "展示类型",
          version: "0.1.4"
        },
        {
          id: "PROPS",
          name: "Menu Props",
          version: "0.1.4"
        }
      ],
      menu1: [],
      menu2: [],
      menuList: [
        {
          id: 1,
          name: "主菜单1"
        },
        {
          id: 2,
          name: "主菜单2",
          children: [
            {
              id: 21,
              name: "子菜单2-1"
            },
            {
              id: 22,
              name: "子菜单2-2"
            }
          ]
        }
      ],
      columns: PROP_COLUMNS,
      propList: [
        {
          attr: "data",
          explain: "要展示的结构化数据",
          type: "Array",
          default: "[]"
        },
        {
          attr: "value",
          explain: `激活的菜单，可用<code class="keyword-code">v-model</code>绑定`,
          type: "Array",
          default: "[]"
        },
        {
          attr: "type",
          explain: `展示类型，可选<code class="keyword-code">column-flex</code>竖向可伸缩、<code class="keyword-code">column-fixed</code>竖向不可伸缩`,
          type: "String",
          default: "column-flex"
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