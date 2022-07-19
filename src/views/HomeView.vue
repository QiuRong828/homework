<template>
  <div class="home">
    <qiu-table :column="column" checkbox index>
      <template v-slot:operation>
        <el-button type="primary" @click="handleEdit(slot.data)"
          >编辑</el-button
        >
        <qiu-button type="danger" @click="handleDelete(slot.data)"
          >删除</qiu-button
        >
      </template>
    </qiu-table>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      column: [
        {
          label: "标题",
          prop: "title",
          type: "function",
          callback: (row) => {
            if (row.id === 1) {
              return `<a href="https://www.baidu.com">${row.title}</a>`;
            }
            return `<span>${row.title}</span>`;
          },
        },
        { label: "日期", prop: "date" },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "性别", prop: "sex" },
        {
          label: "操作",
          prop: "operation",
          type: "slot",
          slot_name: "operation",
        },
      ],
    };
  },
  components: {
    qiuTable: () => import("../components/table/index.vue"),
    qiuButton: () => import("../components/button/index.vue"),
  },
  methods: {
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row);
    },
  },
};
</script>
