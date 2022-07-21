<template>
  <div class="form-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item
        v-for="item in formItem"
        :key="item.label"
        :label="item.label"
      >
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    item: {
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
