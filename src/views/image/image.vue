<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Image 图片</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-image :data="[imageList[0]]" style="width: 200px;height: 200px;"/>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过传递
              <code>data</code>属性生成图片，点击可查看大图。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[0].height}">
            <pre>
            <code>
  &lt;y-image :data="imageList" style="width: 200px;height: 200px;" /&gt;

  export default {
    data() {
      return {
        imageList: [
          {
            url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
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
      <div v-show="compareVersion('SL')">
        <h3 id="SL">{{getNav('SL').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-image :data="imageList" :max="3" style="height: 200px;"/>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置
              <code>max</code>属性固定图片展示张数。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[1].height}">
            <pre>
            <code>
  &lt;y-image :data="imageList" :max="3" style="height: 200px;" /&gt;

  export default {
    data() {
      return {
        imageList: [
          {
            url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
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
      <div v-show="compareVersion('FX')">
        <h3 id="FX">{{getNav('FX').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-image :data="imageList" direction="vertical" :max="2" style="width: 200px;"/>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过
              <code>direction</code>属性设置图片展示方向， 可选
              <code>horizontal</code>水平（默认），
              <code>vertical</code>垂直。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: navList[2].height}">
            <pre>
            <code>
  &lt;y-image :data="imageList" direction="vertical" :max="2" style="width: 200px;" /&gt;

  export default {
    data() {
      return {
        imageList: [
          {
            url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
          },
          {
            url: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
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
import viewMixins from "@/util/viewMixins";
export default {
  name: "Images",
  components: {
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      imageList: [
        {
          url:
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
        }
      ],
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "0.1.6",
          height: "330px"
        },
        {
          id: "SL",
          name: "缩略",
          version: "0.1.6",
          height: "330px"
        },
        {
          id: "FX",
          name: "方向",
          version: "0.1.6",
          height: "420px"
        },
        {
          id: "PROPS",
          name: "Images Props",
          version: "0.1.6"
        },
        {
          id: "EVENTS",
          name: "Images Events",
          version: "0.1.6"
        }
      ],
      propList: [
        {
          attr: "data",
          explain: "显示的结构化数据",
          type: "Array",
          default: "[]"
        },
        {
          attr: "max",
          explain: "图片固定展示张数",
          type: "Number",
          default: "-"
        },
        {
          attr: "direction",
          explain: `图片方向，可选<code class="keyword-code">horizontal</code>水平，<code class="keyword-code">vertical</code>垂直`,
          type: "String",
          default: "horizontal"
        }
      ],
      eventList: [
        {
          attr: "on-click",
          explain: "点击图片的回调",
          return: "点击的图片对象"
        }
      ]
    };
  }
};
</script>