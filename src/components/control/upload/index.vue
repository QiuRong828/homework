<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import { props, mixin } from "../basis";
export default {
  mixins: [mixin],
  props: {
    ...props,
  },
  watch: {},
  data() {
    return {
      val: "",
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
