<template>
  <div class="home">
    <qiu-table></qiu-table>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {
    qiuTable: () => import("../components/table/index.vue"),
  },
  methods: {},
};
</script>
