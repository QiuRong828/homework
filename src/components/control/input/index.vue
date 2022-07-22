<template>
  <div>
    <el-input v-model="val" @input="handleInputEvent"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      val: "",
    };
  },
  watch: {
    value: {
      handler(newValue) {
        this.val = newValue;
      },
      Immediate: true,
    },
  },
  methods: {
    handleInputEvent() {
      this.$emit("update:value", this.val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
