<template>
  <div class="xm-toast" v-if="show">
    <div class="toast-content">
      <img :src="successIcon" width="40" height="40"  type="image/svg+xml" alt="" v-if="type === 'success'">
      <img :src="errorIcon" width="40" height="40"  type="image/svg+xml" alt="" v-if="type === 'error'">
      <img :src="infoIcon" width="40" height="40"  type="image/svg+xml" alt="" v-if="type === 'info'">
      <img :src="warningIcon" width="40" height="40"  type="image/svg+xml" alt="" v-if="type === 'warning'">
      <p class="toast-text">{{text}}</p>
    </div>
  </div>
</template>

<script>
import successIcon from "../../images/success.svg";
import errorIcon from "../../images/error.svg";
import infoIcon from "../../images/info.svg";
import warningIcon from "../../images/warning.svg";

export default {
  props: {
    show: Boolean,
    text: String,
    type: {
      type: String,
      validator: value => {
        return ["success", "info", "error", "warning"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      successIcon,
      errorIcon,
      infoIcon,
      warningIcon
    };
  }
};
</script>

<style lang="less">
.xm-toast {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  .toast-content {
    width: 120px;
    height: 120px;
    background: rgba(17, 17, 17, 0.7);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .toast-text {
      color: #fff;
      margin-top: 5px;
    }
  }
}
</style>
