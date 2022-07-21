<template>
  <div class="form-container">
    <el-form ref="form" :model="field" label-width="80px">
      <template v-for="item in formItem">
        <el-form-item
          v-if="item.type === 'input'"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
        <el-form-item
          v-if="item.type === 'select'"
          :key="item.label"
          :label="item.label"
          :prop="item.prop"
          :rules="item.rules"
        >
          <el-select v-model="field[item.prop]"></el-select>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button v-for="item in button" v-bind="item" :key="item.key">{{
          item.label
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Rules from "./createRules";
export default {
  name: "index",
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
  },
  data() {
    return {
      formItem: [],
      form: {
        name: "",
      },
    };
  },
  methods: {},
  beforeMount() {
    this.formItem = this.item;
  },
};
</script>

<style scoped></style>
