<template>
  <div class="home">
    <qiu-table :column="column" checkbox index></qiu-table>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      column: [
        {
          label: "URL地址",
          type: "function",
          prop: "date",
          callback: (data) => {
            return `<a href="https://www.baidu.com">${data.name}</a>`;
          },
        },
        // { label: "日期", prop: "date", width: 500 },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "性别", prop: "sex" },
      ],
    };
  },
  components: {
    qiuTable: () => import("../components/table/index.vue"),
  },
  methods: {},
};
</script>
