<template>
  <div class="home">
    <qiuButton>默认按钮</qiuButton>
    <qiuButton type="success">成功按钮</qiuButton>
    <qiuButton type="danger">危险按钮</qiuButton>
    <qiuButton type="warning">警告按钮</qiuButton>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      flag: false,
    };
  },
  components: {
    qiuButton: () => import("../components/button/index.vue"),
  },
  methods: {
    handleSubmit() {
      this.flag = true;
      setTimeout(() => {
        console.log("123");
        this.flag = false;
      }, 3000);
    },
  },
};
</script>
