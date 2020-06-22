<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Upload 文件上传</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-upload :active="active1" action="/egg/upload">
                <y-button color="primary" @click="active1 = true">
                  <y-icon type="upload" size="18" />上传
                </y-button>
              </y-upload>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              最基本用法，激活
              <code>active</code>
              上传，一次选择一个文件。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;y-upload :active="active1" action="/egg/upload"&gt;
    &lt;y-button type="primary" @click="active1 = true"&gt;
      &lt;y-icon type="upload" size="18" /&gt;上传 
    &lt;/y-button&gt;
  &lt;/y-upload&gt;

  export default {
    data() {
      return {
        active1: false
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
import viewMixins from "@/mixins/view";
export default {
  name: "Upload",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      active1: false,
      time1: "",
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "150px"
        },
        {
          id: "PROPS",
          name: "Upload Props",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Upload Events",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          attr: "active",
          explain: `是否激活上传`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "action",
          explain: `上传的地址`,
          type: "String",
          default: "-"
        },
        {
          version: "1.0.0",
          attr: "headers",
          explain: `设置上传的请求头部`,
          type: "Object",
          default: "-"
        },
        {
          version: "1.0.0",
          attr: "data",
          explain: `上传时附带的额外参数`,
          type: "Object",
          default: "-"
        },
        {
          attr: "multiple",
          explain: `是否多选文件`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "accept",
          explain: `接受上传的文件类型，input 标签原生的 accept 属性`,
          type: "String",
          default: "-"
        }
      ],
      eventList: [
        {
          attr: "on-success",
          explain: "文件上传成功时的钩子",
          return: "response"
        },
        {
          attr: "on-error",
          explain: "文件上传失败时的钩子",
          return: "error"
        }
      ]
    };
  },
  methods: {}
};
</script>