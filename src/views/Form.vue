<template>
  <div>
    <qiuForm :item="formItem" :field="formField"></qiuForm>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      formItem: [
        {
          label: "手机号",
          type: "input",
          valueType: "phone",
          prop: "phone",
          required: true,
        },
        {
          label: "密码",
          type: "input",
          valueType: "password",
          prop: "password",
          required: true,
        },
        {
          label: "邮箱",
          type: "input",
          valueType: "email",
          prop: "email",
          required: true,
        },
        {
          label: "年龄",
          type: "select",
          prop: "age",
          required: true,
        },
      ],
      formField: {
        phone: "",
        password: "",
        age: "",
        email: "",
      },
    };
  },
  components: {
    qiuForm: () => import("../components/form/index"),
  },
};
</script>

<style scoped></style>
