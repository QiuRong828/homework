<template>
  <div class="home">
    <qiu-table :column="column"></qiu-table>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      column: [
        { label: "日期", prop: "date" },
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
