<template>
  <div>
    <el-select v-model="val" @change="handleChangeEvent">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    value: {
      handler(newValue) {
        this.val = newValue;
      },
      immediate: true,
    },
    config: {
      handler(val) {
        this.initOptions();
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      val: "",
      options: [],
    };
  },
  methods: {
    handleChangeEvent(value) {
      console.log(value);
      this.$emit("update:value", value);
    },
    initOptions() {
      const initRequest = this.config.initRequest;
      const url = this.config.url;
      const method = this.config.method;
      const options = this.config.options;

      if (url) {
        this.fetchOptions(url, method);
      }

      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options;
        console.log(options);
      }
    },
    fetchOptions(url, method) {},
  },
};
</script>

<style scoped></style>
