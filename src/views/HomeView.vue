<template>
  <div class="home">
    <qiuButton type="success" :loading="flag" @click="handleSubmit"
      >成功按钮</qiuButton
    >
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
