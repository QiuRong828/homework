<template>
  <el-form ref="form" :model="field" label-width="80px">
    <template v-for="item in formItem">
      <el-form-item
        v-if="item.type === 'input'"
        :rules="item.rules"
        :key="item.label"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          :value="field[item.prop]"
          :config="item"
          :is="!item.type ? 'com-text' : `com-${item.type}`"
        ></component>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button
        @click="handleButton(item)"
        v-for="item in button"
        :loading="item.loading"
        v-bind="item"
        :key="item.key"
        >{{ item.label }}</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import createRules from "./createRules";
const modules = {};
const files = require.context("../control", true, /index.vue$/i);
files.keys().forEach((item) => {
  const key = item.split("/");
  const name = key[1];
  modules[`com-${name}`] = files(item).default;
});
export default {
  name: "index",
  components: { ...modules },
  props: {
    item: {
      type: Array,
      default: () => [],
    },
    field: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    button: {
      type: Array,
      default: () => [],
    },
    beforeSubmit: Function,
  },
  data() {
    return {
      formItem: [],
      form: {
        name: "",
      },
    };
  },
  methods: {
    handleButton(item) {
      if (item.key === "submit") {
        this.handleSubmit(item);
        return;
      }
      if (item.key === "cancel") {
        this.handleCancel(item);
      }
    },
    handleSubmit(item) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (typeof this.beforeSubmit === "function") {
            this.$set(item, "loading", true);
            this.beforeSubmit()
              .then((response) => {
                console.log("成功");
                this.$set(item, "loading", false);
              })
              .catch(() => {
                console.log("失败");
                this.$set(item, "loading", false);
              });
          }
          console.log("表单提交");
        }
      });
    },
    // 重置
    handleCancel(item) {
      this.$refs.form.resetFields();
      item.callback && item.callback();
    },
  },
  beforeMount() {
    this.formItem = createRules(this.item);
  },
};
</script>

<style scoped></style>
