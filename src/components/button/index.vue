<template>
  <button class="qiu-button" :class="[isSize, theme]" @click="change">
    <slot>
      <i v-if="loading" class="iconfont icon-loading"></i>
    </slot>
  </button>
</template>

<script>
export default {
  name: "index",
  props: {
    type: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    loading: Boolean,
  },
  computed: {
    theme() {
      return this.type ? `qiu-button-${this.type}` : "";
    },
    isRound() {
      return this.round ? "is-round" : "";
    },
    isBorder() {
      return this.border ? "is-border" : "";
    },
    isSize() {
      return this.size ? `qiu-button-${this.size}` : "";
    },
  },
  methods: {
    change() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.qiu-button {
  border-width: 1px;
  border-style: solid;
  border-color: #dcdfe6;
  height: 40px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;

  + .yang-button {
    margin-left: 14px;
  }
}
.qiu-button-medium {
  height: 38px;
}
.qiu-button-small {
  padding: 0 15px;
  height: 32px;
  font-size: 12px;
}
.qiu-button-mini {
  padding: 0 15px;
  height: 28px;
  font-size: 12px;
}
.qiu-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.qiu-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #409eff;
  }
}
.qiu-button-success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #00d100;
  }
}
.qiu-button-danger {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #e6a23c;
  }
}
.qiu-button-warning {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #f56c6c;
  }
}

/**
 * 圆角
 */
.is-round {
  border-radius: 100px;
}

.icon-loading {
  animation: loading 2s infinite linear;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
