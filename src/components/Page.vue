<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "page"
};
</script>


<style lang="less">
.xm-page {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #F4F6FA;
  overflow-y: auto;
}
</style>

