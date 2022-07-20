<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="index"
        label="序号"
        type="index"
        width="55"
      ></el-table-column>
      <el-table-column
        v-if="checkbox"
        type="selection"
        width="55"
      ></el-table-column>
      <template v-for="(item, index) in column">
        <el-table-column
          v-if="item.type === 'function'"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template v-slot="scope">
            <div
              v-html="item.callback && item.callback(scope.row, index)"
            ></div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="item.type === 'slot'"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template v-slot="scope">
            <slot :name="item.slot_name" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        ></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    checkList: {
      type: Array,
      default: () => [],
    },
    column: {
      type: Array,
      default: () => [],
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: "",
      required: true,
    },
    method: {
      type: String,
      default: "GET",
    },
    data: {
      type: Object,
      default: () => {},
    },
    params: {
      type: Object,
      default: () => {},
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function,
  },
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.initRequest && this.getTableList();
  },
  methods: {
    // 复选框回调
    handleSelectionChange(val) {
      console.log(val);
      this.$emit("update:checkList", val);
    },
    async getTableList() {
      if (!this.url) {
        throw new Error("url is required");
        return false;
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method,
        };
        if (this.data) {
          requestData.data = this.data;
        }

        if (this.params) {
          requestData.params = this.params;
        }
        const response = await this.$axios(requestData);
        let data = response.data.data;
        if (this.format && typeof this.format === "function") {
          data = this.format(response.data);
        }
        this.tableData = data;

        this.onLoad && this.$emit("onLoad", response.data);
      } catch (e) {
        console.log(e);
      }
    },
    // initRequestList() {
    //   this.getTableList();
    // },
    handleRequest() {
      this.getTableList();
    },
  },
};
</script>

<style lang="scss" scoped></style>
