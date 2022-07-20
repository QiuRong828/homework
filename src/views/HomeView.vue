<template>
  <div class="home">
    <el-button @click="getCheckList">数据测试</el-button>
    <qiu-table
      :check-list.sync="check_list"
      ref="tabledemo"
      :column="column"
      init-request
      :format="formatData"
      @onLoad="onLoad"
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
        { label: "创建时间", prop: "create_date" },
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
      check_list: [],
    };
  },
  watch: {
    check_list: {
      handler(value) {
        console.log(value);
      },
    },
  },
  components: {
    qiuTable: () => import("../components/table/index.vue"),
    qiuButton: () => import("../components/button/index.vue"),
  },
  methods: {
    getCheckList() {
      console.log(this.check_list);
    },
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row);
    },
    onLoad(data) {
      console.log(data);
    },
    formatData(data) {
      const tableData = data.data;
      tableData.forEach((item) => {
        item.gender = item.gender === "男" ? 1 : 0;
      });
      return tableData;
    },
  },
};
</script>
