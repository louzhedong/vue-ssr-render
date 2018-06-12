<template>
  <div class="loading-component" v-show="show">
    <div class="loading-box">
      <img class="xm-loading-icon" :src="LoadingPng"/>
      <p class="loading-text">{{text}}</p>
    </div>
  </div>
</template>

<script>
import LoadingPng from "../../images/loading.gif";

export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: "正在加载中..."
    }
  },
  data() {
    return {
      LoadingPng
    };
  }
};
</script>

<style lang="less">
.loading-component {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading-box {
    width: 120px;
    height: 120px;
    background: rgba(17, 17, 17, 0.7);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .xm-loading-icon {
      width: 40px;
      height: 40px;
    }
    .loading-text {
      color: #fff;
      margin-top: 5px;
    }
  }
}
</style>
