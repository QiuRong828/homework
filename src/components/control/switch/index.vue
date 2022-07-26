<template>
  <div
    class="yang-switch"
    :class="{ 'yang-switch-active': active }"
    @click="handleSwitch"
  >
    <i></i>
  </div>
</template>

<script>
import { props, mixin } from "../basis";
export default {
  name: "SwitchComponent",
  mixins: [mixin],
  props: {
    ...props,
  },
  data() {
    return {
      // 打开
      activeValue: true,
      // 关闭
      inactiveValue: false,
      // 定义数据类型
      initDefaultValueType: ["boolean", "string", "number"],
    };
  },
  computed: {
    active() {
      return this.value === this.activeValue;
    },
  },
  watch: {
    "config.activeValue": {
      handler(val) {
        const type = this.initDefaultValueType.includes(typeof val);
        type && (this.activeValue = val);
      },
      immediate: true,
      deep: true,
    },
    "config.inactiveValue": {
      handler(val) {
        const type = this.initDefaultValueType.includes(typeof val);
        type && (this.inactiveValue = val);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleSwitch() {
      const beforeChange = this.config.beforeChange;
      const value =
        this.value === this.activeValue ? this.inactiveValue : this.activeValue;
      if (
        beforeChange &&
        Object.prototype.toString.call(beforeChange) === "[object Function]"
      ) {
        beforeChange(this.active)
          .then((response) => {
            this.$emit("update:value", value);
          })
          .catch((error) => {
            console.log(error);
          });
        return false;
      }
      this.$emit("update:value", value);
    },
  },
};
</script>
<style scoped></style>
