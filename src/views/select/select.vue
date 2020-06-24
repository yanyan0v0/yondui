<template>
  <div class="main-row">
    <!-- 文档内容 -->
    <article class="code-article" v-scrolling>
      <h1>Select 选择框</h1>
      <h2>代码示例</h2>
      <!-- 分割线 -->
      <div v-show="compareVersion('JC')">
        <h3 id="JC">{{getNav('JC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-select v-model="select1">
                <y-option v-for="city in cityList" :key="city.name" :value="city.name">{{city.name}}</y-option>
              </y-select>
              <p>绑定的值为：{{select1}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              基本用法，可以使用
              <code>v-model</code>
              双向绑定数据，单选时只接受 String 或 Number，多选时只接受 Array。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre v-pre>
            <code>
  &lt;y-select v-model="select1" @on-change="handleChange"&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"
      &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
  &lt;p&gt;绑定的值为：{{select1}}&lt;/p&gt;

  export default {
    data() {
      return {
        select1: "",
        cityList: [
          {
            name: "北京"
          },
          {
            name: "上海"
          },
          {
            name: "广州"
          },
          {
            name: "深圳"
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
      <div v-show="compareVersion('CC')">
        <h3 id="CC">{{getNav('CC').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview preview-select">
              <y-select v-model="select2" size="large" width="200px">
                <y-option v-for="city in cityList" :key="city.name" :value="city.name">{{city.name}}</y-option>
              </y-select>
              <br />
              <y-select v-model="select2" width="200px">
                <y-option v-for="city in cityList" :key="city.name" :value="city.name">{{city.name}}</y-option>
              </y-select>
              <br />
              <y-select v-model="select2" size="small" width="200px">
                <y-option v-for="city in cityList" :key="city.name" :value="city.name">{{city.name}}</y-option>
              </y-select>
              <br />
              <y-select v-model="select2" size="mini" width="200px">
                <y-option v-for="city in cityList" :key="city.name" :value="city.name">{{city.name}}</y-option>
              </y-select>
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
            <pre v-pre>
            <code>
  &lt;y-select v-model="select2" size="large" width="200px"&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"
      &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
  &lt;br /&gt;
  &lt;y-select v-model="select2" width="200px"&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"
      &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
  &lt;br /&gt;
  &lt;y-select v-model="select2" size="small" width="200px"&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"
      &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
  &lt;br /&gt;
  &lt;y-select v-model="select2" size="mini" width="200px"&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"
      &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
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
            <div class="preview flex">
              <div class="m-r-5">
                <p>select禁用</p>
                <y-select v-model="select3" disabled>
                  <y-option
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                  >{{city.name}}</y-option>
                </y-select>
              </div>
              <div>
                <p>option禁用</p>
                <y-select v-model="select3">
                  <y-option
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                    :disabled="city.name == '上海'"
                  >{{city.name}}</y-option>
                </y-select>
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过给
              <code>y-select</code>
              设置属性
              <code>disabled</code>禁用整个选择器。
              通过给
              <code>y-option</code>设置属性
              <code>disabled</code>可以禁用当前项。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JY').height}">
            <code-action-bar :name="getNav('JY').name" />
            <pre v-pre>
            <code>
  &lt;p&gt;select禁用&lt;/p&gt;
  &lt;y-select v-model="select3" disabled&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"
      &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;

  &lt;p&gt;option禁用&lt;/p&gt;
  &lt;y-select v-model="select3"&gt;
    &lt;y-option
      v-for="city in cityList"
      :key="city.name"
      :value="city.name"
      :disabled="city.name == '上海'"
    &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('KQK')">
        <h3 id="KQK">{{getNav('KQK').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-select v-model="select4" clearable>
                <y-option v-for="city in cityList" :key="city.name" :value="city.name">{{city.name}}</y-option>
              </y-select>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置属性
              <code>clearable</code>可以清空已选项。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('KQK').height}">
            <code-action-bar :name="getNav('KQK').name" />
            <pre v-pre>
            <code>
  &lt;y-select v-model="select4" clearable&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"
      &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('QZTB')">
        <h3 id="QZTB">{{getNav('QZTB').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-select v-model="select5">
                <y-icon type="shizhong" slot="prefix"></y-icon>
                <y-option v-for="city in cityList" :key="city.name" :value="city.name">{{city.name}}</y-option>
              </y-select>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              通过设置slot为
              <code>prefix</code>可以在 y-select 内显示前缀图标或内容。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('QZTB').height}">
            <code-action-bar :name="getNav('QZTB').name" />
            <pre v-pre>
            <code>
  &lt;y-select v-model="select5"&gt;
    &lt;y-icon type="shizhong" slot="prefix"&gt;&lt;/y-icon&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"
      &gt;{{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('DX')">
        <h3 id="DX">{{getNav('DX').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-select v-model="select6" clearable>
                <y-option v-for="city in cityList" :key="city.name" :value="city.name">{{city.name}}</y-option>
              </y-select>
              <p>绑定的值为：{{select6}}</p>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              多选时
              <code>v-model</code>绑定的值必须为数组。
              <!-- <br />设置属性
              <code>max-tag-count</code>
              可指定最多显示的 tag 数量，超出后折叠。
              <br />设置属性
              <code>max-tag-placeholder</code>
              可以自定义 tag 超出后折叠的显示内容。-->
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('DX').height}">
            <code-action-bar :name="getNav('DX').name" />
            <pre v-pre>
            <code>
  &lt;y-select v-model="select6" clearable&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"&gt;
      {{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
  
  export default {
    data() {
      return {
        select6: ["北京"]
      };
    }
  };
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('KSS')">
        <h3 id="KSS">{{getNav('KSS').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview flex">
              <div class="m-r-5">
                <p>单选可搜索</p>
                <y-select v-model="select7" filterable clearable>
                  <y-option
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                  >{{city.name}}</y-option>
                </y-select>
              </div>
              <div>
                <p>多选可搜索</p>
                <y-select v-model="select8" filterable clearable>
                  <y-option
                    v-for="city in cityList"
                    :key="city.name"
                    :value="city.name"
                  >{{city.name}}</y-option>
                </y-select>
              </div>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置
              <code>filterable</code>可以开启搜索。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('KSS').height}">
            <code-action-bar :name="getNav('KSS').name" />
            <pre v-pre>
            <code>
  &lt;p&gt;单选可搜索&lt;/p&gt;
  &lt;y-select v-model="select7" filterable clearable&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"&gt;
      {{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;

  &lt;p&gt;多选可搜索&lt;/p&gt;
  &lt;y-select v-model="select8" filterable clearable&gt;
    &lt;y-option 
      v-for="city in cityList" 
      :key="city.name" 
      :value="city.name"&gt;
      {{city.name}}&lt;/y-option&gt;
  &lt;/y-select&gt;
  
  export default {
    data() {
      return {
        select7: '',
        select8: []
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
        :slotList="filterVersion(slotList)"
        :eventList="filterVersion(eventList)"
      >
        <div>
          <h3 id="OPTION">{{getNav('OPTION').name}}</h3>
          <y-table :data="filterVersion(opPropList)" :columns="propColumns"></y-table>
        </div>
      </footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/mixins/view";
import { PROP_COLUMNS } from "@/util/config";
export default {
  // [Vue warn]: Do not use built-in or reserved HTML elements as component id: Switch
  name: "Select",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      select1: "",
      select2: "",
      select3: "",
      select4: "",
      select5: "",
      select6: ["北京"],
      select7: "",
      select8: [],
      cityList: [
        {
          name: "北京"
        },
        {
          name: "上海"
        },
        {
          name: "广州"
        },
        {
          name: "深圳"
        }
      ],
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "230px"
        },
        {
          id: "CC",
          name: "尺寸",
          version: "1.0.0",
          height: "280px"
        },
        {
          id: "JY",
          name: "禁用",
          version: "1.0.0",
          height: "200px"
        },
        {
          id: "KQK",
          name: "可清空",
          version: "1.0.0"
        },
        {
          id: "QZTB",
          name: "前缀图标",
          version: "1.0.0"
        },
        {
          id: "DX",
          name: "多选",
          version: "1.0.0",
          height: "250px"
        },
        {
          id: "KSS",
          name: "可搜索",
          version: "1.0.0",
          height: "220px"
        },
        {
          id: "PROPS",
          name: "Select Props",
          version: "1.0.0"
        },
        {
          id: "SLOTS",
          name: "Select Slots",
          version: "1.0.0"
        },
        {
          id: "EVENTS",
          name: "Select Events",
          version: "1.0.0"
        },
        {
          id: "OPTION",
          name: "Option Props",
          version: "1.0.0"
        }
      ],
      propColumns: PROP_COLUMNS,
      propList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: `可以使用 <code class="keyword-code">v-model</code> 双向绑定数据，单选时只接受 String 或 Number，多选时只接受 Array`,
          type: "String | Number | Array",
          default: "空"
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
          attr: "width",
          explain: `宽度`,
          type: "String",
          default: "auto"
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
          attr: "placeholder",
          explain: `占位文本`,
          type: "String",
          default: "请选择"
        },
        {
          version: "1.0.0",
          attr: "clearable",
          explain: `是否显示清空按钮`,
          type: "Boolean",
          default: "false"
        }
      ],
      slotList: [
        {
          version: "1.0.0",
          attr: "-",
          explain: "设置展示内容"
        },
        {
          version: "1.0.0",
          attr: "prefix ",
          explain: "自定义 select 内头部图标"
        }
      ],
      eventList: [
        {
          version: "1.0.0",
          attr: "on-change",
          explain: "点击选项后的回调函数",
          return: "value，label"
        },
        {
          version: "1.0.0",
          attr: "on-query-change",
          explain: "搜索词改变时触发",
          return: "value，label"
        },
        {
          version: "1.0.0",
          attr: "on-visible-change",
          explain: "下拉框展开或收起时触发",
          return: "value，label"
        },
        {
          version: "1.0.0",
          attr: "on-clear",
          explain: "点击清空时触发",
          return: "value，label"
        }
      ],
      opPropList: [
        {
          version: "1.0.0",
          attr: "value",
          explain: "默认根据此属性值进行筛选，必填",
          type: "String | Number",
          default: "空"
        },
        {
          version: "1.0.0",
          attr: "label",
          explain: "当option内的slot内容为自定义，这需要此属性来告知选中内容",
          type: "String",
          default: "空"
        },
        {
          version: "1.0.0",
          attr: "disabled",
          explain: "是否禁用当前项",
          type: "Boolean",
          default: "false"
        }
      ]
    };
  },
  methods: {
    // handleChange(value, label) {
    //   this.label1 = label;
    // }
  }
};
</script>

<style lang="less">
.preview-select {
  .y-select {
    margin-bottom: 10px;
  }
}
</style>