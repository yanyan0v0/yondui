<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Form 表单</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-form label-width="100px" inline>
                <y-form-item label="姓名" error="姓名不能为空">
                  <y-input maxlength="12"></y-input>
                </y-form-item>
                <y-form-item label="性别" error="性别不能为空">
                  <y-radio>男</y-radio>
                  <y-radio>女</y-radio>
                </y-form-item>
              </y-form>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              最基本用法，激活
              <code>active</code>
              上传，一次选择一个文件。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name"/>
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
      >
        <div>
          <h3 id="METHODS">{{getNav('METHODS').name}}</h3>
          <y-table :data="filterVersion(methodList)" :columns="eventColumn"></y-table>
        </div>
      </footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/util/viewMixins";
import { EVENT_COLUMNS } from "@/util/config";
export default {
  name: "Form",
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
          height: "150px"
        },
        {
          id: "PROPS",
          name: "Form Props",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Form Events",
          version: "1.0.0"
        },
        {
          id: "METHODS",
          name: "Form Methods",
          version: "1.0.0"
        }
      ],
      eventColumn: EVENT_COLUMNS,
      propList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: `可以使用 <code class="keyword-code">v-model</code> 双向绑定数据`,
          type: "Object",
          default: "-"
        },
        {
          version: "1.0.0",
          attr: "rules",
          explain: `表单验证规则，具体配置查看 <a class="keyword-a" href="https://github.com/yiminghe/async-validator">async-validator</a>`,
          type: "String",
          default: "-"
        },
        {
          attr: "inline",
          explain: `是否开启行内表单模式`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "label-width",
          explain: `表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值`,
          type: "Object",
          default: "-"
        },
        {
          attr: "show-error",
          explain: `是否显示校验错误信息`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "hide-required-mark",
          explain: `是否隐藏所有表单项的必选标记`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "label-colon",
          explain: `是否自动在 label 名称后添加冒号`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "disabled",
          explain: `是否禁用该表单内的所有组件（适用于具有 disabled 属性的表单类组件）`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "autocomplete",
          explain: `原生的 autocomplete 属性，可选值为 off 或 on`,
          type: "String",
          default: "off"
        }
      ],
      eventList: [
        {
          attr: "on-validate",
          explain:
            "任一表单项被校验后触发，返回表单项 prop、校验状态、错误消息",
          return: "prop, status, error"
        }
      ],
      methodList: [
        {
          attr: "validate",
          explain:
            "对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise",
          return: "	callback"
        }
      ]
    };
  },
  methods: {}
};
</script>