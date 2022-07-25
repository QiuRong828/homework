<template>
  <div>
    <el-checkbox-group v-model="val">
      <el-checkbox
        v-for="item in options"
        :key="item[props.value]"
        :label="item[props.value]"
        >{{ item[props.label] }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>
<script>
import { props } from "../basis";
export default {
  props: {
    value: {
      type: [String, Number, Array],
      default: "",
    },
    ...props,
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
  computed: {
    url() {
      return this.config?.url;
    },
    initRequest() {
      return this.config?.initRequest;
    },
    methods() {
      return this.config?.methods || "get";
    },
    fetchSearch() {
      return this.config?.fetchSearch;
    },
  },
  methods: {
    handleChangeEvent(value) {
      console.log(value);
      this.$emit("update:value", value);
    },
    initOptions() {
      if (this.url) {
        this.fetchOptions();
        return false;
      }
      const options = this.config.options;
      if (options && Array.isArray(options) && options.length > 0) {
        this.options = options;
        console.log(options);
      }
    },
    fetchOptions() {
      if (!this.initRequest) {
        return false;
      }

      this.getOptions();
    },
    keywordRequest(query) {
      if (query) {
        this.getOptions();
      }
    },
    async getOptions() {
      try {
        const requestData = {
          url: this.url,
          method: this.method,
        };

        const response = await this.$axios(requestData);
        let data = response.data.data;
        if (this.format && typeof this.format === "function") {
          data = this.format(response.data);
        }
        this.options = data;

        this.onLoad && this.$emit("onLoad", response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped></style>
