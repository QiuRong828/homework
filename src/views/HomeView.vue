<template>
  <div class="home">
    <qiu-table
      :column="column"
      checkbox
      index
      url="/name/"
      method="POST"
      :data="data_1"
      :params="params_1"
    >
      <template v-slot:operation="slot">
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
      data_1: {
        name: "jack",
      },
      params_1: {
        name: "rose",
      },
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
