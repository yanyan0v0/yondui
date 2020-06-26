<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Dialog 对话框</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button color="primary" @click="visible1 = true">显示对话框</y-button>
              <y-dialog v-model="visible1" title="标题">
                <p>对话框内容</p>
              </y-dialog>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              使用
              <code>value</code>或
              <code>v-model</code>绑定显示状态，
              <code>title</code>属性可自定义标题。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name"/>
            <pre v-pre>
            <code>
  &lt;y-button color="primary" @click="visible1 = true"&gt;显示对话框&lt;/y-button&gt;
  &lt;y-dialog v-model="visible1" title="标题"&gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/y-dialog&gt;

  export default {
    data() {
      return {
        visible1: false
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('ZDYYS')">
        <h3 id="ZDYYS">{{getNav('ZDYYS').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button color="primary" @click="visible2 = true">自定义头尾部</y-button>
              <y-button color="primary" @click="visible3 = true">隐藏头部</y-button>
              <y-button color="primary" @click="visible4 = true">隐藏尾部</y-button>
              <y-button color="primary" @click="visible5 = true">自定义宽高</y-button>

              <y-dialog v-model="visible2">
                <p slot="header" class="dialog-demo-header">
                  <y-icon type="tishi-mianxing"></y-icon>删除提示
                </p>
                <p class="text-center">是否删除该条目？</p>
                <div slot="footer" class="dialog-demo-footer">
                  <span @click="visible2 = false">删除</span>
                </div>
              </y-dialog>

              <y-dialog v-model="visible3">
                <p>隐藏头部对话框内容</p>
                <p>隐藏头部对话框内容</p>
                <p>隐藏头部对话框内容</p>
              </y-dialog>

              <y-dialog v-model="visible4" footer-hide title="隐藏尾部">
                <p>隐藏尾部对话框内容</p>
                <p>隐藏尾部对话框内容</p>
                <p>隐藏尾部对话框内容</p>
              </y-dialog>

              <y-dialog v-model="visible5" width="500px" height="500px" title="自定义宽高">
                <div class="full center">
                  <p>自定义宽高 500px * 500px</p>
                </div>
              </y-dialog>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              使用具名slot可替换头部和尾部内容，
              <br>
              <code>title</code>属性设置对话框标题，当为空时不显示头部，
              <br>
              <code>footer-hide</code>属性可隐藏尾部，
              <br>
              <code>width</code> 和
              <code>height</code> 属性可自定义对话框
              <code>.y-dialog</code>的宽高。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('ZDYYS').height}">
            <code-action-bar :name="getNav('ZDYYS').name"/>
            <pre v-pre>
            <code>
  &lt;y-button color="primary" @click="visible2 = true"&gt;自定义头尾部&lt;/y-button&gt;
  &lt;y-button color="primary" @click="visible3 = true"&gt;隐藏头部&lt;/y-button&gt;
  &lt;y-button color="primary" @click="visible4 = true"&gt;隐藏尾部&lt;/y-button&gt;
  &lt;y-button color="primary" @click="visible5 = true"&gt;自定义宽高&lt;/y-button&gt;

  &lt;y-dialog v-model="visible2"&gt;
    &lt;p slot="header" class="dialog-demo-header"&gt;
      &lt;y-icon type="tishi-mianxing"&gt;&lt;/y-icon&gt;删除提示
    &lt;/p&gt;
    &lt;p class="text-center"&gt;是否删除该条目？&lt;/p&gt;
    &lt;div slot="footer" class="dialog-demo-footer"&gt;
      &lt;span @click="visible2 = false"&gt;删除&lt;/span&gt;
    &lt;/div&gt;
  &lt;/y-dialog&gt;

  &lt;y-dialog v-model="visible3"&gt;
    &lt;p&gt;隐藏头部对话框内容&lt;/p&gt;
    &lt;p&gt;隐藏头部对话框内容&lt;/p&gt;
    &lt;p&gt;隐藏头部对话框内容&lt;/p&gt;
  &lt;/y-dialog&gt;

  &lt;y-dialog v-model="visible4" footer-hide title="隐藏尾部"&gt;
    &lt;p&gt;隐藏尾部对话框内容&lt;/p&gt;
    &lt;p&gt;隐藏尾部对话框内容&lt;/p&gt;
    &lt;p&gt;隐藏尾部对话框内容&lt;/p&gt;
  &lt;/y-dialog&gt;

  &lt;y-dialog v-model="visible5" width="500px" height="500px" title="自定义宽高"&gt;
    &lt;div class="full center"&gt;
      &lt;p&gt;自定义宽高 500px * 500px&lt;/p&gt;
    &lt;/div&gt;
  &lt;/y-dialog&gt;

  export default {
    data() {
      return {
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('QP')">
        <h3 id="QP">{{getNav('QP').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button color="primary" @click="visible6 = true">全屏对话框</y-button>
              <y-dialog v-model="visible6" fullscreen title="标题">
                <p>全屏对话框内容</p>
              </y-dialog>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              使用
              <code>fullscreen</code>属性显示全屏。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('QP').height}">
            <code-action-bar :name="getNav('QP').name"/>
            <pre v-pre>
            <code>
  &lt;y-button color="primary" @click="visible6 = true"&gt;显示对话框&lt;/y-button&gt;
  &lt;y-dialog v-model="visible6" title="标题"&gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/y-dialog&gt;

  export default {
    data() {
      return {
        visible6: false
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('TZ')">
        <h3 id="TZ">{{getNav('TZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button color="primary" @click="visible7 = true">拖拽对话框</y-button>
              <y-dialog v-model="visible7" draggable title="按住头部拖拽">
                <p>拖拽对话框内容</p>
              </y-dialog>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              使用
              <code>draggable</code>属性实现拖拽，注意不能使用具名slot替换头部。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('TZ').height}">
            <code-action-bar :name="getNav('TZ').name"/>
            <pre v-pre>
            <code>
  &lt;y-button color="primary" @click="visible7 = true"&gt;显示对话框&lt;/y-button&gt;
  &lt;y-dialog v-model="visible7" title="标题"&gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/y-dialog&gt;

  export default {
    data() {
      return {
        visible7: false
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('LS')">
        <h3 id="LS">{{getNav('LS').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button color="primary" @click="visible8 = true">拉伸对话框</y-button>
              <y-dialog v-model="visible8" scaleable title="点击右下角拉伸">
                <p>拉伸对话框内容</p>
              </y-dialog>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              使用
              <code>scaleable</code>属性实现拉伸，注意拉伸后大小最小只能是100px * 100px且会自动居中。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('LS').height}">
            <code-action-bar :name="getNav('LS').name"/>
            <pre v-pre>
            <code>
  &lt;y-button color="primary" @click="visible8 = true"&gt;显示对话框&lt;/y-button&gt;
  &lt;y-dialog v-model="visible8" title="标题"&gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/y-dialog&gt;

  export default {
    data() {
      return {
        visible8: false
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('YBJZ')">
        <h3 id="YBJZ">{{getNav('YBJZ').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button color="primary" @click="visible9 = true">异步加载对话框</y-button>
              <y-dialog v-model="visible9" title="异步加载" @on-ok="handleOk">
                <p>异步加载对话框内容</p>
                <p>点击确定后3s后关闭</p>
              </y-dialog>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              使用
              <code>on-ok</code>回调函数并设置
              <code>loading</code>可出现确认按钮的加载动画。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('YBJZ').height}">
            <code-action-bar :name="getNav('YBJZ').name"/>
            <pre v-pre>
            <code>
  &lt;y-button color="primary" @click="visible9 = true"&gt;异步加载对话框&lt;/y-button&gt;
  &lt;y-dialog v-model="visible9" title="异步加载" @on-ok="handleOk"&gt;
    &lt;p&gt;异步加载对话框内容&lt;/p&gt;
    &lt;p&gt;3s后关闭&lt;/p&gt;
  &lt;/y-dialog&gt;

  export default {
    data() {
      return {
        visible9: false
      };
    },
    methods: {
      handleOk(dialog) {
        dialog.loading = true;
        setTimeout(() => {
          this.visible9 = false;
          dialog.loading = false;
        }, 3000);
      }
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('HSDY')">
        <h3 id="HSDY">{{getNav('HSDY').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-button color="primary" @click="instance('info')">默认</y-button>
              <y-button color="primary" @click="instance('success')">成功</y-button>
              <y-button color="primary" @click="instance('warning')">警告</y-button>
              <y-button color="primary" @click="instance('error')">错误</y-button>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              使用
              <code>$dialog</code>函数可生成一次性dialog，在消失时移除，
              支持所有props参数设置，另外提供了
              <code>loading</code>显示确定按钮的加载状态，
              <code>close()</code>方法关闭当前dialog,
              <code>remove()</code>方法关闭所有dialog 。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('HSDY').height}">
            <code-action-bar :name="getNav('HSDY').name"/>
            <pre v-pre>
            <code>
  &lt;y-button color="primary" @click="instance('info')"&gt;默认&lt;/y-button&gt;
  &lt;y-button color="primary" @click="instance('success')"&gt;成功&lt;/y-button&gt;
  &lt;y-button color="primary" @click="instance('warning')"&gt;警告&lt;/y-button&gt;
  &lt;y-button color="primary" @click="instance('error')"&gt;错误&lt;/y-button&gt;

  export default {
    methods: {
      instance(type) {
        this.$dialog[type]({
          title: type,
          content: "&lt;p&gt;对话框内容&lt;/p&gt;&lt;p&gt;对话框内容&lt;/p&gt;",
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
  name: "Dialog",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
      visible9: false,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "ZDYYS",
          name: "自定义样式",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "QP",
          name: "全屏",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "TZ",
          name: "拖拽",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "LS",
          name: "拉伸",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "YBJZ",
          name: "异步加载",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "HSDY",
          name: "函数调用",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "PROPS",
          name: "Dialog Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Dialog Slots",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Dialog Events",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: `对话框是否显示，可使用 <code class="keyword-code">v-model</code>  双向绑定数据`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "title",
          explain: `对话框标题，如果使用 slot 自定义页头，则 title 无效`,
          type: "String",
          default: "空"
        },
        {
          version: "1.0.0",
          attr: "width",
          explain: `对话框宽度`,
          type: "String",
          default: "30%"
        },
        {
          version: "1.0.0",
          attr: "height",
          explain: `对话框高度`,
          type: "String",
          default: "空"
        },
        {
          version: "1.0.0",
          attr: "mask",
          explain: `是否显示遮罩层`,
          type: "Boolean",
          default: "true"
        },
        {
          version: "1.0.0",
          attr: "show-close",
          explain: `是否显示关闭按钮`,
          type: "Boolean",
          default: "true"
        },
        {
          version: "1.0.0",
          attr: "fullscreen",
          explain: `是否全屏显示`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "draggable",
          explain: `是否可以拖拽移动`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "scaleable",
          explain: `是否可以放大缩小`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "z-index",
          explain: `对话框层级`,
          type: "Number",
          default: "2020+"
        },
        {
          version: "1.0.0",
          attr: "transfer",
          explain: `是否将弹层放置于 body 内`,
          type: "Boolean",
          default: "true"
        },
        {
          version: "1.0.0",
          attr: "footer-hide",
          explain: `不显示底部`,
          type: "Boolean",
          default: "false"
        },
        {
          version: "1.0.0",
          attr: "mask-closable",
          explain: `是否允许点击遮罩层关闭`,
          type: "Boolean",
          default: "true"
        },
        {
          version: "1.0.0",
          attr: "esc-closable",
          explain: `是否允许点击Esc键关闭`,
          type: "Boolean",
          default: "true"
        },
        {
          version: "1.0.0",
          attr: "ok-text",
          explain: `确定按钮文字`,
          type: "String",
          default: "确定"
        },
        {
          version: "1.0.0",
          attr: "cancel-text",
          explain: `取消按钮文字， 当传空值时可隐藏取消按钮`,
          type: "String",
          default: "取消"
        },
        {
          version: "1.0.0",
          attr: "dialog-class",
          explain: `给<code class="keyword-code">.y-dialog</code>增加自定义类`,
          type: "String",
          default: "空"
        }
      ],
      slotList: [
        {
          version: "1.0.0",
          attr: "-",
          explain: "对话框内容"
        },
        {
          version: "1.0.0",
          attr: "header ",
          explain: "对话框头部内容"
        },
        {
          version: "1.0.0",
          attr: "footer ",
          explain: "对话框底部内容"
        }
      ],
      eventList: [
        {
          version: "1.0.0",
          attr: "on-ok",
          explain: "点击确定的回调",
          return: "dialog组件对象"
        },
        {
          version: "1.0.0",
          attr: "on-cancel",
          explain: "点击取消的回调，关闭按钮，遮罩层，Esc键的回调",
          return: "dialog组件对象"
        }
      ]
    };
  },
  methods: {
    handleDialogClick(value) {
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
.dialog-demo-header {
  padding: 12px 16px 5px;
  text-align: center;
  color: @error-color;
  i {
    margin-right: 5px;
  }
}
.dialog-demo-footer {
  display: flex;
  margin-top: 10px;
  background-color: @error-color;
  border-radius: 0 0 4px 4px;
  span {
    flex: 1;
    padding: 10px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
}
</style>