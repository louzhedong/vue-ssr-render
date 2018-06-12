<template>
  <div id="app">
    <keep-alive>
       <router-view class="view" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="view" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="less">
.link {
  margin: 10px;
}
</style>

