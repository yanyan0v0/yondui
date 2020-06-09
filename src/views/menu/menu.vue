<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Menu 菜单</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
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
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
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
      <div v-show="compareVersion('ZSLX')">
        <h3 id="ZSLX">{{getNav('ZSLX').name}}</h3>
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
            <code-action-bar :name="getNav('ZSLX').name" />
            <pre>
            <code>
  &lt;y-menu v-model="menu2" :data="menuList" type="column-fixed"&gt;&lt;/y-icon&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table :name="$options.name" :propList="filterVersion(propList)"></footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/util/viewMixins";
export default {
  name: "Menu",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "ZSLX",
          name: "展示类型",
          version: "1.0.0"
        },
        {
          id: "PROPS",
          name: "Menu Props",
          version: "1.0.0"
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
  }
};
</script>