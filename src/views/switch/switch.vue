<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Switch 开关</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-switch v-model="switch1" @on-change="handleChange"></y-switch>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">基本用法，状态切换时会触发事件。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;y-switch v-model="switch1" @on-change="handleChange" &gt;&lt;/y-switch&gt;

  export default {
    data() {
      return {
        switch1: false
      };
    },
    methods: {
      handleChange(state) {
        if (state) {
          this.$alert.success("切换为开");
        } else {
          this.$alert.text("切换为关");
        }
      }
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
            <div class="preview preview-switch">
              <y-switch v-model="switch2" size="large"></y-switch>
              <y-switch v-model="switch2"></y-switch>
              <y-switch v-model="switch2" size="small"></y-switch>
              <y-switch v-model="switch2" size="mini"></y-switch>
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
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('CC').height}">
            <code-action-bar :name="getNav('CC').name" />
            <pre>
            <code>
  &lt;y-switch v-model="switch2" size="large"&gt;&lt;/y-switch&gt;
  &lt;y-switch v-model="switch2"&gt;&lt;/y-switch&gt;
  &lt;y-switch v-model="switch2" size="small"&gt;&lt;/y-switch&gt;
  &lt;y-switch v-model="switch2" size="mini"&gt;&lt;/y-switch&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('WZ')">
        <h3 id="WZ">{{getNav('WZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-switch">
              <y-switch v-model="switch4" size="large">
                <template slot="open">是</template>
                <template slot="close">否</template>
              </y-switch>
              <y-switch v-model="switch4">
                <template slot="open">是</template>
                <template slot="close">否</template>
              </y-switch>
              <y-switch v-model="switch4" size="small">
                <template slot="open">是</template>
                <template slot="close">否</template>
              </y-switch>
              <y-switch v-model="switch4" size="mini">
                <template slot="open">是</template>
                <template slot="close">否</template>
              </y-switch>
              <br />
              <y-switch v-model="switch5" size="large">
                <template slot="open">开启</template>
                <template slot="close">关闭</template>
              </y-switch>
              <y-switch v-model="switch5">
                <template slot="open">开启</template>
                <template slot="close">关闭</template>
              </y-switch>
              <y-switch v-model="switch5" size="small">
                <template slot="open">开启</template>
                <template slot="close">关闭</template>
              </y-switch>
              <y-switch v-model="switch5" size="mini">
                <template slot="open">开启</template>
                <template slot="close">关闭</template>
              </y-switch>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">自定义内容，长度不限。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('WZ').height}">
            <code-action-bar :name="getNav('WZ').name" />
            <pre>
            <code>
  &lt;y-switch v-model="switch4" size="large"&gt;
    &lt;template slot="open"&gt;是&lt;/template&gt;
    &lt;template slot="close"&gt;否&lt;/template&gt;
  &lt;/y-switch&gt;
  &lt;y-switch v-model="switch4"&gt;
    &lt;template slot="open"&gt;是&lt;/template&gt;
    &lt;template slot="close"&gt;否&lt;/template&gt;
  &lt;/y-switch&gt;
  &lt;y-switch v-model="switch4" size="small"&gt;
    &lt;template slot="open"&gt;是&lt;/template&gt;
    &lt;template slot="close"&gt;否&lt;/template&gt;
  &lt;/y-switch&gt;
  &lt;y-switch v-model="switch4" size="mini"&gt;
    &lt;template slot="open"&gt;是&lt;/template&gt;
    &lt;template slot="close"&gt;否&lt;/template&gt;
  &lt;/y-switch&gt;
  &lt;br /&gt;
  &lt;y-switch v-model="switch5" size="large"&gt;
    &lt;template slot="open"&gt;开启&lt;/template&gt;
    &lt;template slot="close"&gt;关闭&lt;/template&gt;
  &lt;/y-switch&gt;
  &lt;y-switch v-model="switch5"&gt;
    &lt;template slot="open"&gt;开启&lt;/template&gt;
    &lt;template slot="close"&gt;关闭&lt;/template&gt;
  &lt;/y-switch&gt;
  &lt;y-switch v-model="switch5" size="small"&gt;
    &lt;template slot="open"&gt;开启&lt;/template&gt;
    &lt;template slot="close"&gt;关闭&lt;/template&gt;
  &lt;/y-switch&gt;
  &lt;y-switch v-model="switch5" size="mini"&gt;
    &lt;template slot="open"&gt;开启&lt;/template&gt;
    &lt;template slot="close"&gt;关闭&lt;/template&gt;
  &lt;/y-switch&gt;

  export default {
    data() {
      return {
        switch4: false,
        switch5: false,
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('JZZ')">
        <h3 id="JZZ">{{getNav('JZZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-switch">
              <y-switch :value="false" loading></y-switch>
              <y-switch :value="true" loading></y-switch>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              增加
              <code>loading</code>属性可以设置开关为加载中，该状态下无法切换。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JZZ').height}">
            <code-action-bar :name="getNav('JZZ').name" />
            <pre>
            <code>
  &lt;y-switch :value="false" loading&gt;&lt;/y-switch&gt;
  &lt;y-switch :value="true" loading&gt;&lt;/y-switch&gt;
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
            <div class="preview preview-switch">
              <y-switch :value="false" disabled></y-switch>
              <y-switch :value="true" disabled></y-switch>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              增加
              <code>disabled</code>属性可以设置开关为禁用。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JY').height}">
            <code-action-bar :name="getNav('JY').name" />
            <pre>
            <code>
  &lt;y-switch :value="false" disabled&gt;&lt;/y-switch&gt;
  &lt;y-switch :value="true" disabled&gt;&lt;/y-switch&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('YS')">
        <h3 id="YS">{{getNav('YS').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-switch">
              <y-switch v-model="switch3" close-color="red" open-color="blue"></y-switch>
              <y-switch v-model="switch3" close-color="red" open-color="blue" loading></y-switch>
              <y-switch v-model="switch3" close-color="red" open-color="blue" disabled></y-switch>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              <code>close-color</code>为关闭时的颜色、
              <code>open-color</code>为开启时的颜色。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('YS').height}">
            <code-action-bar :name="getNav('YS').name" />
            <pre>
            <code>
  &lt;y-switch v-model="switch3" close-color="red" open-color="blue"&gt;&lt;/y-switch&gt;
  &lt;y-switch v-model="switch3" close-color="red" open-color="blue" loading&gt;&lt;/y-switch&gt;
  &lt;y-switch v-model="switch3" close-color="red" open-color="blue" disabled&gt;&lt;/y-switch&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 底部API说明 -->
      <footer-table
        :name="$options.name"
        :propList="filterVersion(propList)"
        :slotList="filterVersion(slotList)"
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
  // [Vue warn]: Do not use built-in or reserved HTML elements as component id: Switch
  name: "Switchs",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
      switch5: false,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "180px"
        },
        {
          id: "CC",
          name: "尺寸",
          version: "1.0.0"
        },
        {
          id: "WZ",
          name: "文字",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "JZZ",
          name: "加载中",
          version: "1.0.0"
        },
        {
          id: "JY",
          name: "禁用",
          version: "1.0.0"
        },
        {
          id: "YS",
          name: "颜色",
          version: "1.0.0"
        },
        // {
        //   id: "ZZQH",
        //   name: "阻止切换",
        //   version: "1.0.0"
        // },
        {
          id: "PROPS",
          name: "Switchs Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Switchs Slots",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Switchs Events",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: `可以使用 <code class="keyword-code">v-model</code> 双向绑定数据`,
          type: "Boolean",
          default: "false"
        },

        {
          version: "1.0.0",
          attr: "size",
          explain: `展示类型，可选<code class="keyword-code">large</code>大、<code class="keyword-code">small</code>小、<code class="keyword-code">mini</code>极小`,
          type: "String",
          default: "空"
        },
        {
          version: "1.0.0",
          attr: "loading",
          explain: `加载中的开关`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "disabled",
          explain: `禁用开关`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "close-color",
          explain: `自定义关闭时的背景色`,
          type: "String",
          default: "#c5c8ce"
        },
        {
          version: "1.0.0",
          attr: "open-color",
          explain: `自定义打开时的背景色`,
          type: "String",
          default: "#2d8cf0"
        }
      ],
      slotList: [
        {
          version: "1.0.0",
          attr: "close",
          explain: "自定义关闭时的内容"
        },
        {
          version: "1.0.0",
          attr: "open",
          explain: "自定义开启时的内容"
        }
      ],
      eventList: [
        {
          version: "1.0.0",
          attr: "on-change",
          explain: "开关变化时触发，返回当前的状态",
          return: "true | false"
        }
      ]
    };
  },
  methods: {
    handleChange(state) {
      if (state) {
        this.$alert.success("切换为开");
      } else {
        this.$alert.text("切换为关");
      }
    }
  }
};
</script>

<style lang="less">
.preview-switch {
  .y-switch {
    margin: 5px;
  }
}
</style>