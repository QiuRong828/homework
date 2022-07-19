<template>
  <div class="home">
    <qiu-table :column="column" checkbox index url="/name/" method="GET">
      <template v-slot:operation>
        <el-button type="primary" @click="handleEdit(slot.data)"
          >编辑</el-button
        >
        <qiu-button type="danger" @click="handleDelete(slot.data)"
          >删除</qiu-button
        >
      </template>
    </qiu-table>

    <qiu-table :column="column_1" index checkbox url="/fruit/" method="GET">
    </qiu-table>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      column: [
        { label: "姓名", prop: "name" },
        { label: "性别", prop: "gender" },
        {
          label: "操作",
          type: "slot",
          slot_name: "operation",
          prop: "operation",
        },
      ],
      column_1: [
        { label: "姓名", prop: "name" },
        { label: "类型", prop: "type" },
        {
          label: "操作",
          type: "slot",
          slot_name: "operation",
          prop: "operation",
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
