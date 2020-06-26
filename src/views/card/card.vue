<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Card 卡片</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-card-example">
              <y-card padding="10px">
                <img
                  src="http://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg"
                  alt="图书"
                >
                <p class="error-color">￥78</p>
                <p>Vue.js权威指南</p>
                <p class="disabled-color">电子工业出版社</p>
                <p class="text-right">
                  <y-button color="error" shape="solid" size="mini">加入购物车</y-button>
                </p>
              </y-card>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">最基本用法，自定义显示内容。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name"/>
            <pre v-pre>
            <code>
  &lt;y-card padding="10px"&gt;
    &lt;img
      src="http://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg"
      alt="图书"
    &gt;
    &lt;p class="error-color"&gt;￥78&lt;/p&gt;
    &lt;p&gt;Vue.js权威指南&lt;/p&gt;
    &lt;p class="disabled-color"&gt;电子工业出版社&lt;/p&gt;
    &lt;p class="text-right"&gt;
      &lt;y-button color="error" shape="solid" size="mini"&gt;加入购物车&lt;/y-button&gt;
    &lt;/p&gt;
  &lt;/y-card&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('TBDB')">
        <h3 id="TBDB">{{getNav('TBDB').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-card-example">
              <y-card padding="10px">
                <p slot="header" class="flex-between">
                  <span>Vue.js权威指南</span>
                  <y-icon type="shoucang"></y-icon>
                </p>
                <img
                  src="http://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg"
                  alt="图书"
                >

                <p class="disabled-color">电子工业出版社</p>
                <p slot="footer" class="flex-between">
                  <span class="error-color">￥78</span>
                  <y-button color="error" shape="solid" size="mini">加入购物车</y-button>
                </p>
              </y-card>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              可自定义
              <code>slot</code>为
              <code>header</code>的头部内容和
              <code>slot</code>为
              <code>header</code>的底部内容。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('TBDB').height}">
            <code-action-bar :name="getNav('TBDB').name"/>
            <pre v-pre>
            <code>
  &lt;y-card padding="10px"&gt;
    &lt;p slot="header" class="flex-between"&gt;
      &lt;span&gt;Vue.js权威指南&lt;/span&gt;
      &lt;y-icon type="shoucang"&gt;&lt;/y-icon&gt;
    &lt;/p&gt;
    &lt;img
      src="http://img14.360buyimg.com/n1/s200x200_jfs/t3049/211/1135504925/129375/cc072102/57c6862aN329b23fd.jpg"
      alt="图书"
    &gt;

    &lt;p class="disabled-color"&gt;电子工业出版社&lt;/p&gt;
    &lt;p slot="footer" class="flex-between"&gt;
      &lt;span class="error-color"&gt;￥78&lt;/span&gt;
      &lt;y-button color="error" shape="solid" size="mini"&gt;加入购物车&lt;/y-button&gt;
    &lt;/p&gt;
  &lt;/y-card&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('YY')">
        <h3 id="YY">{{getNav('YY').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview flex preview-card-example">
              <y-card padding="20px">阴影总是显示</y-card>
              <y-card shadow="hover" padding="20px">阴影悬停显示</y-card>
              <y-card shadow="never" padding="20px">阴影不显示</y-card>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置
              <code>shadow</code>为
              <code>always</code>总是显示（默认）、
              <code>hover</code>悬停显示、
              <code>never</code>不显示。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('YY').height}">
            <code-action-bar :name="getNav('YY').name"/>
            <pre v-pre>
            <code>
  &lt;y-card padding="20px"&gt;阴影总是显示&lt;/y-card&gt;
  &lt;y-card shadow="hover" padding="20px"&gt;阴影悬停显示&lt;/y-card&gt;
  &lt;y-card shadow="never" padding="20px"&gt;阴影不显示&lt;/y-card&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('FGMK')">
        <h3 id="FGMK">{{getNav('FGMK').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-card-example-split">
              <p>Number类型</p>
              <y-card :split="3">
                <p class="example-split" slot="card1">模块1（33.33%）</p>
                <p class="example-split" slot="card2">模块2（33.33%）</p>
                <p class="example-split" slot="card3">模块3（33.33%）</p>
              </y-card>
              <p>Array类型</p>
              <y-card :split="['30%', '40%', '30%']">
                <p class="example-split" slot="card1">模块1（30%）</p>
                <p class="example-split" slot="card2">模块2（40%）</p>
                <p class="example-split" slot="card3">模块3（30%）</p>
              </y-card>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置
              <code>split</code>可划分同比例区域，可传Number 或 Array，注意数组各项必须是百分比。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('FGMK').height}">
            <code-action-bar :name="getNav('FGMK').name"/>
            <pre v-pre>
            <code>
  &lt;p&gt;Number类型&lt;/p&gt;
  &lt;y-card :split="3"&gt;
    &lt;p class="example-split" slot="card1"&gt;模块1（33.33%）&lt;/p&gt;
    &lt;p class="example-split" slot="card2"&gt;模块2（33.33%）&lt;/p&gt;
    &lt;p class="example-split" slot="card3"&gt;模块3（33.33%）&lt;/p&gt;
  &lt;/y-card&gt;
  &lt;p&gt;Array类型&lt;/p&gt;
  &lt;y-card :split="['30%', '40%', '30%']"&gt;
    &lt;p class="example-split" slot="card1"&gt;模块1（30%）&lt;/p&gt;
    &lt;p class="example-split" slot="card2"&gt;模块2（40%）&lt;/p&gt;
    &lt;p class="example-split" slot="card3"&gt;模块3（30%）&lt;/p&gt;
  &lt;/y-card&gt;

  &lt;style lang="less"&gt;
  .y-card {
    margin-bottom: 10px;
    .example-split {
      padding: 20px;
      text-align: center;
    }
  }
  &lt;/style&gt;
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
      ></footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/mixins/view";
export default {
  name: "Card",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      page1: 1,
      page2: 1,
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "420px"
        },
        {
          id: "TBDB",
          name: "设置头部底部",
          version: "1.0.0",
          height: "450px"
        },
        {
          id: "YY",
          name: "设置阴影",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "FGMK",
          name: "分割模块",
          version: "1.0.0",
          height: "350px"
        },
        {
          id: "PROPS",
          name: "Card Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Card Slots",
          version: "1.0.0"
        }
      ],
      propList: [
        {
          version: "1.0.0",
          attr: "padding",
          explain: `卡片内部间距`,
          type: "String",
          default: "0px"
        },
        {
          version: "1.0.0",
          attr: "shadow",
          explain: `设置阴影显示时机，可选<code class="keyword-code">always</code>一直显示、<code class="keyword-code">hover</code>悬浮显示、<code class="keyword-code">never</code>不显示`,
          type: "String",
          default: "always"
        },
        {
          version: "1.0.0",
          attr: "split",
          explain: `分割模块数`,
          type: "Number | Array",
          default: "1"
        }
      ],
      slotList: [
        {
          attr: "无",
          explain: "卡片主体内容"
        },
        {
          attr: "header",
          explain: "卡片标题内容"
        },
        {
          attr: "footer",
          explain: "卡片底部内容"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.preview-card-example {
  .y-card {
    width: 220px;
  }
  .y-card + .y-card {
    margin-left: 10px;
  }
}
.preview-card-example-split {
  .y-card {
    margin-bottom: 10px;
    .example-split {
      padding: 20px;
      text-align: center;
    }
  }
}
</style>
