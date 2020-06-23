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
              <y-form label-width="100px">
                <y-form-item label="姓名">
                  <y-input v-model.lazy="form1.name" placeholder="请输入姓名" maxlength="12" clearable></y-input>
                  <p>{{form1.name}}</p>
                </y-form-item>
                <y-form-item label="性别">
                  <y-radio-group v-model="form1.sex">
                    <y-radio :value="0">男</y-radio>
                    <y-radio :value="1">女</y-radio>
                  </y-radio-group>
                </y-form-item>
                <y-form-item label="是否学生">
                  <y-switch v-model="form1.ifStudent">
                    <template slot="open">是</template>
                    <template slot="close">否</template>
                  </y-switch>
                </y-form-item>
                <y-form-item label="所在城市">
                  <y-select v-model="form1.city">
                    <y-option value="北京"></y-option>
                    <y-option value="上海"></y-option>
                    <y-option value="广州"></y-option>
                    <y-option value="深圳"></y-option>
                  </y-select>
                </y-form-item>
                <y-form-item label="出生日期">
                  <y-date-picker v-model="form1.birthday"></y-date-picker>
                </y-form-item>
                <y-form-item label="爱好">
                  <y-checkbox-group v-model="form1.hobby">
                    <y-checkbox value="运动"></y-checkbox>
                    <y-checkbox value="旅游"></y-checkbox>
                    <y-checkbox value="看书"></y-checkbox>
                    <y-checkbox value="游戏"></y-checkbox>
                  </y-checkbox-group>
                </y-form-item>
                <y-form-item>
                  <y-button color="primary">提交</y-button>
                </y-form-item>
              </y-form>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">最基本用法，没有校验规则。</div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('JC').height}">
            <code-action-bar :name="getNav('JC').name" />
            <pre>
            <code>
  &lt;y-form label-width="100px"&gt;
    &lt;y-form-item label="姓名"&gt;
      &lt;y-input v-model="form1.name" placeholder="请输入姓名" maxlength="12"&gt;&lt;/y-input&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="性别"&gt;
      &lt;y-radio-group v-model="form1.sex"&gt;
        &lt;y-radio :value="0"&gt;男&lt;/y-radio&gt;
        &lt;y-radio :value="1"&gt;女&lt;/y-radio&gt;
      &lt;/y-radio-group&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="所在城市"&gt;
      &lt;y-select v-model="form1.city"&gt;
        &lt;y-option value="北京"&gt;&lt;/y-option&gt;
        &lt;y-option value="上海"&gt;&lt;/y-option&gt;
        &lt;y-option value="广州"&gt;&lt;/y-option&gt;
        &lt;y-option value="深圳"&gt;&lt;/y-option&gt;
      &lt;/y-select&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="出生日期"&gt;
      &lt;y-date-picker v-model="form1.birthday"&gt;&lt;/y-date-picker&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="爱好"&gt;
      &lt;y-checkbox-group v-model="form1.hobby"&gt;
        &lt;y-checkbox value="运动"&gt;&lt;/y-checkbox&gt;
        &lt;y-checkbox value="旅游"&gt;&lt;/y-checkbox&gt;
        &lt;y-checkbox value="看书"&gt;&lt;/y-checkbox&gt;
        &lt;y-checkbox value="游戏"&gt;&lt;/y-checkbox&gt;
      &lt;/y-checkbox-group&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item&gt;
      &lt;y-button color="primary"&gt;提交&lt;/y-button&gt;
    &lt;/y-form-item&gt;
  &lt;/y-form&gt;

  export default {
    data() {
      return {
        form1: {
          name: "",
          sex: 0,
          ifStudent: false,
          city: "",
          hobby: [],
          birthday: ""
        }
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('HNBD')">
        <h3 id="HNBD">{{getNav('HNBD').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-form inline>
                <y-form-item label="姓名">
                  <y-input v-model="form2.name" placeholder="请输入姓名" maxlength="12"></y-input>
                </y-form-item>
                <y-form-item label="所在城市">
                  <y-select v-model="form2.city">
                    <y-option value="北京"></y-option>
                    <y-option value="上海"></y-option>
                    <y-option value="广州"></y-option>
                    <y-option value="深圳"></y-option>
                  </y-select>
                </y-form-item>
                <y-form-item>
                  <y-button color="primary">搜索</y-button>
                </y-form-item>
              </y-form>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置
              <code>inline</code>开启行内表单，适合做搜索栏。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('HNBD').height}">
            <code-action-bar :name="getNav('HNBD').name" />
            <pre>
            <code>
  &lt;y-form inline&gt;
    &lt;y-form-item label="姓名"&gt;
      &lt;y-input v-model="form2.name" maxlength="12"&gt;&lt;/y-input&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="所在城市"&gt;
      &lt;y-select v-model="form2.city"&gt;
        &lt;y-option value="北京"&gt;&lt;/y-option&gt;
        &lt;y-option value="上海"&gt;&lt;/y-option&gt;
        &lt;y-option value="广州"&gt;&lt;/y-option&gt;
        &lt;y-option value="深圳"&gt;&lt;/y-option&gt;
      &lt;/y-select&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item&gt;
      &lt;y-button color="primary"&gt;搜索&lt;/y-button&gt;
    &lt;/y-form-item&gt;
  &lt;/y-form&gt;

  export default {
    data() {
      return {
        form2: {
          name: "",
          city: ""
        }
      }
    }
  }
            </code>
            </pre>
          </div>
        </y-card>
      </div>

      <!-- 分割线 -->
      <div v-show="compareVersion('BDJY')">
        <h3 id="BDJY">{{getNav('BDJY').name}}</h3>
        <y-card :split="2">
          <div slot="card1" class="preview-card">
            <div class="preview">
              <y-form ref="form1" :model="form1" :rules="rules1" label-width="100px">
                <y-form-item label="姓名" prop="name">
                  <y-input v-model="form1.name" placeholder="请输入姓名" maxlength="12"></y-input>
                </y-form-item>
                <y-form-item label="性别" prop="sex">
                  <y-radio-group v-model="form1.sex">
                    <y-radio :value="0">男</y-radio>
                    <y-radio :value="1">女</y-radio>
                  </y-radio-group>
                </y-form-item>
                <y-form-item label="是否学生" prop="ifStudent">
                  <y-switch v-model="form1.ifStudent">
                    <template slot="open">是</template>
                    <template slot="close">否</template>
                  </y-switch>
                </y-form-item>
                <y-form-item label="所在城市" prop="city">
                  <y-select v-model="form1.city">
                    <y-option value="北京"></y-option>
                    <y-option value="上海"></y-option>
                    <y-option value="广州"></y-option>
                    <y-option value="深圳"></y-option>
                  </y-select>
                </y-form-item>
                <y-form-item label="出生日期" prop="birthday">
                  <y-date-picker v-model="form1.birthday"></y-date-picker>
                </y-form-item>
                <y-form-item label="爱好" prop="hobby">
                  <y-checkbox-group v-model="form1.hobby">
                    <y-checkbox value="运动"></y-checkbox>
                    <y-checkbox value="旅游"></y-checkbox>
                    <y-checkbox value="看书"></y-checkbox>
                    <y-checkbox value="游戏"></y-checkbox>
                  </y-checkbox-group>
                </y-form-item>
                <y-form-item>
                  <y-button color="primary" @click="submit('form1')">提交</y-button>
                </y-form-item>
              </y-form>
            </div>
            <y-divider position="left">说明</y-divider>
            <div class="introduce">
              设置校验规则，Form需绑定
              <code>model</code>、
              <code>rules</code>，FormItem需绑定
              <code>prop</code> 。
            </div>
          </div>
          <div slot="card2" v-highlight class="code-card" :style="{height: getNav('BDJY').height}">
            <code-action-bar :name="getNav('BDJY').name" />
            <pre>
            <code>
  &lt;y-form ref="form1" :model="form1" label-width="100px" :rules="rules1"&gt;
    &lt;y-form-item label="姓名" prop="name"&gt;
      &lt;y-input v-model="form1.name" placeholder="请输入姓名" maxlength="12"&gt;&lt;/y-input&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="性别" prop="sex"&gt;
      &lt;y-radio-group v-model="form1.sex"&gt;
        &lt;y-radio :value="0"&gt;男&lt;/y-radio&gt;
        &lt;y-radio :value="1"&gt;女&lt;/y-radio&gt;
      &lt;/y-radio-group&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="是否学生" prop="ifStudent"&gt;
      &lt;y-switch v-model="form1.ifStudent"&gt;
        &lt;template slot="open"&gt;是&lt;/template&gt;
        &lt;template slot="close"&gt;否&lt;/template&gt;
      &lt;/y-switch&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="所在城市" prop="city"&gt;
      &lt;y-select v-model="form1.city"&gt;
        &lt;y-option value="北京"&gt;&lt;/y-option&gt;
        &lt;y-option value="上海"&gt;&lt;/y-option&gt;
        &lt;y-option value="广州"&gt;&lt;/y-option&gt;
        &lt;y-option value="深圳"&gt;&lt;/y-option&gt;
      &lt;/y-select&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="出生日期" prop="birthday"&gt;
      &lt;y-date-picker v-model="form1.birthday"&gt;&lt;/y-date-picker&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item label="爱好" prop="hobby"&gt;
      &lt;y-checkbox-group v-model="form1.hobby"&gt;
        &lt;y-checkbox value="运动"&gt;&lt;/y-checkbox&gt;
        &lt;y-checkbox value="旅游"&gt;&lt;/y-checkbox&gt;
        &lt;y-checkbox value="看书"&gt;&lt;/y-checkbox&gt;
        &lt;y-checkbox value="游戏"&gt;&lt;/y-checkbox&gt;
      &lt;/y-checkbox-group&gt;
    &lt;/y-form-item&gt;
    &lt;y-form-item&gt;
      &lt;y-button color="primary"&gt;提交&lt;/y-button&gt;
    &lt;/y-form-item&gt;
  &lt;/y-form&gt;

  export default {
    data() {
      return {
        form1: {
          name: "",
          sex: 0,
          ifStudent: false,
          city: "",
          hobby: [],
          birthday: ""
        },
        rules1: {
          name: { required: true, message: "姓名不能为空", trigger: "blur" },
          sex: { required: true, message: "性别不能为空", trigger: "change" },
          ifStudent: { required: true, message: "是否学生不能为空", trigger: "change" },
          city: { required: true, message: "所在城市不能为空", trigger: "change" },
          hobby: [
            { required: true,type: 'array', message: "爱好不能为空", trigger: "blur" },
            { type: 'array', max: 2, message: "爱好至少选择一项", trigger: "change" }
          ],
          birthday: { required: true, message: "生日不能为空", trigger: "change" }
        }
      }
    },
    methods: {
      submit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.$alert.success("验证成功!");
          } else {
            this.$alert.error("验证失败!");
          }
        });
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
          <h3 id="ITEMPROPS">{{getNav('ITEMPROPS').name}}</h3>
          <y-table :data="filterVersion(itemPropList)" :columns="itemPropColumn"></y-table>
        </div>
        <div>
          <h3 id="ITEMSLOTS">{{getNav('ITEMSLOTS').name}}</h3>
          <y-table :data="filterVersion(itemSlotList)" :columns="itemSlotColumn"></y-table>
        </div>
      </footer-table>
    </article>

    <!-- 导航滚动条 -->
    <y-nav ref="nav" :data="filterVersion(navList)"></y-nav>
  </div>
</template>

<script>
import viewMixins from "@/mixins/view";
import { EVENT_COLUMNS, PROP_COLUMNS, SLOT_COLUMNS } from "@/util/config";
export default {
  name: "Form",
  components: {
    "code-action-bar": () => import("@/views/code-action-bar.vue"),
    "footer-table": () => import("@/views/footer-table.vue")
  },
  mixins: [viewMixins],
  data() {
    return {
      form1: {
        name: "",
        sex: 0,
        ifStudent: false,
        city: "",
        hobby: [],
        birthday: ""
      },
      form2: {
        name: "",
        city: ""
      },
      rules1: {
        name: { required: true, message: "姓名不能为空", trigger: "blur" },
        sex: {
          required: true,
          type: "number",
          message: "性别不能为空",
          trigger: "change"
        },
        ifStudent: {
          required: true,
          type: "boolean",
          message: "是否学生不能为空",
          trigger: "change"
        },
        city: {
          required: true,
          message: "所在城市不能为空",
          trigger: "change"
        },
        hobby: [
          {
            required: true,
            type: "array",
            message: "爱好不能为空",
            trigger: "blur"
          },
          {
            type: "array",
            max: 2,
            message: "爱好至少选择一项",
            trigger: "change"
          }
        ],
        birthday: { required: true, message: "生日不能为空", trigger: "change" }
      },
      navList: [
        {
          id: "JC",
          name: "基础",
          version: "1.0.0",
          height: "460px"
        },
        {
          id: "HNBD",
          name: "行内表单",
          version: "1.0.0",
          height: "180px"
        },
        {
          id: "BDJY",
          name: "表单校验",
          version: "1.0.0",
          height: "460px"
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
        },
        {
          id: "ITEMPROPS",
          name: "FormItem Props",
          version: "1.0.0"
        },
        {
          id: "ITEMSLOTS",
          name: "FormItem Slots",
          version: "1.0.0"
        }
      ],
      eventColumn: EVENT_COLUMNS,
      itemPropColumn: PROP_COLUMNS,
      itemSlotColumn: SLOT_COLUMNS,
      propList: [
        {
          version: "1.0.0",
          attr: "model",
          explain: `表单数据对象`,
          type: "Object",
          default: "-"
        },
        {
          version: "1.0.0",
          attr: "rules",
          explain: `表单验证规则，具体配置查看 <a class="keyword-a" href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a>`,
          type: "Object",
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
          type: "String",
          default: "-"
        },
        {
          attr: "show-error",
          explain: `是否显示校验错误信息`,
          type: "Boolean",
          default: "true"
        },
        {
          attr: "hide-required-mark",
          explain: `是否隐藏所有表单项的必选标记`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "label-symbol",
          explain: `在 label 名称后添加该符号`,
          type: "String",
          default: "-"
        },
        {
          attr: "disabled",
          explain: `是否禁用该表单内的所有组件（适用于具有 disabled 属性的表单类组件）`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "autocomplete",
          explain: `form原生的 autocomplete 属性，可选值为 off 或 on`,
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
      ],
      itemPropList: [
        {
          attr: "prop",
          explain: `对应表单域 value 里的字段`,
          type: "String",
          default: "-"
        },
        {
          attr: "label",
          explain: `标签文本`,
          type: "String",
          default: "-"
        },
        {
          attr: "label-width",
          explain: `表单域标签的的宽度`,
          type: "String",
          default: "-"
        },
        {
          attr: "label-for",
          explain: `指定原生的 label 标签的 for 属性`,
          type: "String",
          default: "-"
        },
        {
          attr: "required",
          explain: `是否必填，如不设置，则会根据校验规则自动生成`,
          type: "Boolean",
          default: "false"
        },
        {
          attr: "rules",
          explain: `表单验证规则`,
          type: "Object | Array",
          default: "-"
        },
        {
          attr: "error",
          explain: `设置该值会使表单验证状态变为error，并显示该错误信息`,
          type: "String",
          default: "-"
        },
        {
          attr: "show-error",
          explain: `是否显示校验错误信息`,
          type: "Boolean",
          default: "true"
        },
        {
          attr: "hide-label-symbol",
          explain: `是否隐藏label后的符号`,
          type: "Boolean",
          default: "true"
        }
      ],
      itemSlotList: [
        {
          attr: "无",
          explain: `内容`
        },
        {
          attr: "label",
          explain: `label 内容`
        }
      ]
    };
  },
  methods: {
    submit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$alert.success("验证成功!");
        } else {
          this.$alert.error("验证失败!");
        }
      });
    }
  }
};
</script>