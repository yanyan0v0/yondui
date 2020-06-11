<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Checkbox 对话框</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-checkbox v-model="value1">基础</y-checkbox>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              使用
              <code>v-model</code>绑定选择状态。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre v-pre>
            <code>
  &lt;y-checkbox v-model="value1"&gt;基础&lt;/y-checkbox&gt;

  export default {
    data() {
      return {
        value1: false
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('CC')">
        <h3 id="CC">{{getNav('CC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-checkbox v-model="value2" size="large">大</y-checkbox>
              <y-checkbox v-model="value2">中</y-checkbox>
              <y-checkbox v-model="value2" size="small">小</y-checkbox>
              <y-checkbox v-model="value2" size="mini">极小</y-checkbox>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>size</code>可以为
              <code>large</code>大、
              中（默认）、
              <code>small</code>小、
              <code>mini</code>极小。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre v-pre>
            <code>
  &lt;y-checkbox v-model="value2" size="large"&gt;大&lt;/y-checkbox&gt;
  &lt;y-checkbox v-model="value2"&gt;中&lt;/y-checkbox&gt;
  &lt;y-checkbox v-model="value2" size="small"&gt;小&lt;/y-checkbox&gt;
  &lt;y-checkbox v-model="value2" size="mini"&gt;极小&lt;/y-checkbox&gt;

  export default {
    data() {
      return {
        value2: false
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('ZH')">
        <h3 id="ZH">{{getNav('ZH').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-checkbox-group v-model="value3">
                <y-checkbox value="北京">北京</y-checkbox>
                <y-checkbox value="上海">上海</y-checkbox>
                <y-checkbox value="广州">广州</y-checkbox>
                <y-checkbox value="深圳">深圳</y-checkbox>
              </y-checkbox-group>
              <p class="disabled-color">选中的值： {{value3}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>v-model</code>绑定的值必须是数组，且 y-checkbox 的
              <code>value</code> 必传。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('ZH').height}">
            <code-action-bar :name="getNav('ZH').name" />
            <pre v-pre>
            <code>
  &lt;y-checkbox-group v-model="value3"&gt;
    &lt;y-checkbox value="北京"&gt;北京&lt;/y-checkbox&gt;
    &lt;y-checkbox value="上海"&gt;上海&lt;/y-checkbox&gt;
    &lt;y-checkbox value="广州"&gt;广州&lt;/y-checkbox&gt;
    &lt;y-checkbox value="深圳"&gt;深圳&lt;/y-checkbox&gt;
  &lt;/y-checkbox-group&gt;
  &lt;p class="disabled-color"&gt;选中的值： {{value3}}&lt;/p&gt;

  export default {
    data() {
      return {
        value3: []
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('JY')">
        <h3 id="JY">{{getNav('JY').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <p>checkbox禁用</p>
              <p>
                <y-checkbox disabled value>全选</y-checkbox>
              </p>
              <p>checkbox-group禁用</p>
              <y-checkbox-group v-model="value4" disabled>
                <y-checkbox value="北京">北京</y-checkbox>
                <y-checkbox value="上海">上海</y-checkbox>
                <y-checkbox value="广州">广州</y-checkbox>
                <y-checkbox value="深圳">深圳</y-checkbox>
              </y-checkbox-group>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>v-model</code>绑定的值必须是数组，且 y-checkbox 的
              <code>value</code> 必传。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JY').height}">
            <code-action-bar :name="getNav('JY').name" />
            <pre v-pre>
            <code>
  &lt;p&gt;checkbox禁用&lt;/p&gt;
  &lt;y-checkbox disabled value&gt;全选&lt;/y-checkbox&gt;

  &lt;p&gt;checkbox-group禁用&lt;/p&gt;
  &lt;y-checkbox-group v-model="value4" disabled&gt;
    &lt;y-checkbox value="北京"&gt;北京&lt;/y-checkbox&gt;
    &lt;y-checkbox value="上海"&gt;上海&lt;/y-checkbox&gt;
    &lt;y-checkbox value="广州"&gt;广州&lt;/y-checkbox&gt;
    &lt;y-checkbox value="深圳"&gt;深圳&lt;/y-checkbox&gt;
  &lt;/y-checkbox-group&gt;

  export default {
    data() {
      return {
        value4: ['北京', '上海', '广州', '深圳']
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
        :propList="filterVersion(propList)"
        :eventList="filterVersion(eventList)"
      >
        <div>
          <h3 id="GROUPPROPS">{{getNav('GROUPPROPS').name}}</h3>
          <y-table :data="filterVersion(groupPropList)" :columns="propColumns"></y-table>
        </div>
        <div>
          <h3 id="GROUPEVENTS">{{getNav('GROUPEVENTS').name}}</h3>
          <y-table :data="filterVersion(groupEventList)" :columns="propColumns"></y-table>
        </div>
      </footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/util/viewMixins";
import { PROP_COLUMNS } from "@/util/config";
export default {
  name: "Checkbox",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      value1: false,
      value2: false,
      value3: [],
      value4: ["北京", "上海", "广州", "深圳"],
      value5: false,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "CC",
          name: "尺寸",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "ZH",
          name: "组合",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "JY",
          name: "禁用",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "PROPS",
          name: "Checkbox Props",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Checkbox Events",
          version: "1.0.0"
        },
        {
          id: "GROUPPROPS",
          name: "Checkbox Group Props",
          version: "1.0.0"
        },
        {
          id: "GROUPEVENTS",
          name: "Checkbox Group Events",
          version: "1.0.0"
        }
      ],
      propColumns: PROP_COLUMNS,
      propList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: `对话框是否显示，需使用 <code class="keyword-code">v-model</code>  双向绑定数据`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "size",
          explain: `大小，可选值为 <code class="keyword-code">large</code>大、<code class="keyword-code">small</code>小、<code class="keyword-code">mini</code>极小`,
          type: "String",
          default: "-"
        },
        {
          version: "1.0.0",
          attr: "disabled",
          explain: `是否禁用`,
          type: "Boolean",
          default: "false"
        }
      ],
      eventList: [
        {
          version: "1.0.0",
          attr: "on-change",
          explain: "在选项状态发生改变时触发，通过修改外部的数据改变时不会触发",
          return: "true | false"
        }
      ],
      groupPropList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: `选中项集合，可使用 <code class="keyword-code">v-model</code>  双向绑定数据`,
          type: "Array",
          default: "[]"
        },
        {
          version: "1.0.0",
          attr: "size",
          explain: `设置其内所有checkbox大小，可选值为 <code class="keyword-code">large</code>大、<code class="keyword-code">small</code>小、<code class="keyword-code">mini</code>极小`,
          type: "String",
          default: "-"
        },
        {
          version: "1.0.0",
          attr: "disabled",
          explain: `是否禁用其内所有checkbox`,
          type: "Boolean",
          default: "false"
        }
      ],
      groupEventList: [
        {
          version: "1.0.0",
          attr: "on-change",
          explain: "在选项状态发生改变时触发，通过修改外部的数据改变时不会触发",
          return: "[...]"
        }
      ]
    };
  },
  methods: {
    handleCheckboxClick(value) {
      this.$alert.text("点击了" + value);
    },
    handleOk(dialog) {
      dialog.loading = true;
      setTimeout(() => {
        this.visible9 = false;
        dialog.loading = false;
      }, 3000);
    },
    instance(type) {
      this.$dialog[type]({
        title: type,
        content: "<p>对话框内容</p><p>对话框内容</p>",
        onOk: dialog => {
          dialog.loading = true;
          setTimeout(() => {
            dialog.close();
            dialog.loading = false;
            this.$alert.success("请求完成");
          }, 1000);
        },
        onCancel: dialog => {
          dialog.close();
          this.$alert.text("点击取消");
        }
      });
    }
  }
};
</script>

<style lang="less">
</style>