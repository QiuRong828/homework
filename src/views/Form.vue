<template>
  <div>
    <qiuForm :item="formItem"></qiuForm>
  </div>
</template>

<script>
export default {
  components: {
    qiuForm: () => import("../components/form/index.vue"),
  },
  data() {
    return {
      formItem: [
        {
          type: "input",
          label: "活动名称",
        },
        {
          type: "select",
          label: "活动区域",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
