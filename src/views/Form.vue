<template>
  <div>
    <qiuForm :item="formItem" :field="formField"></qiuForm>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    const validateName = (rules, value, callback) => {
      if (value && value !== "10") {
        callback(new Error("请输入10"));
      } else {
        callback();
      }
    };
    return {
      formItem: [
        {
          type: "input",
          prop: "name",
          label: "姓名",
          required: true,
          rules: [
            { min: 3, max: 10, message: "请输入3~10个字符", trigger: "blur" },
            { validator: validateName, trigger: "blurt" },
          ],
        },
        {
          type: "select",
          prop: "gender",
          label: "性别",
          required: true,
        },
        {
          type: "input",
          prop: "sex",
          label: "年龄",
          required: true,
        },
      ],
      formField: {
        name: "",
        gender: "",
        age: "",
      },
    };
  },
  components: {
    qiuForm: () => import("../components/form/index"),
  },
};
</script>

<style scoped></style>
