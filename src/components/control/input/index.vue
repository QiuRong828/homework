<template>
  <div>
    <el-input v-model="val"></el-input>
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
};
</script>

<style lang="scss" scoped></style>
