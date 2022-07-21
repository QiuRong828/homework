<template>
  <div>
    <qiuForm :item="formItem" :field="formField"></qiuForm>
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
          label: "姓名",
          prop: "name",
          rules: [
            {
              required: true,
              message: "必填",
            },
          ],
        },
        {
          type: "select",
          label: "性别",
          prop: "gender",
          rules: [
            {
              required: true,
              message: "必填",
            },
          ],
        },
      ],
      formField: {
        name: "",
        gender: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
