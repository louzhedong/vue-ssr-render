<template>
  <page>
    <div>{{itemList}}</div>
    <button @click="addItem">添加项目</button>
    <button @click="subItem">减少项目</button>
    <div>
      <button @click="showLoading">展示loading</button>
      <button @click="showToast">展示toastr</button>
    </div>
  </page>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      cursor: 0
    };
  },
  computed: {
    itemList() {
      return this.$store.getters.itemList;
    }
  },
  methods: {
    addItem() {
      this.$store.dispatch("addItem", { item: this.cursor });
      this.cursor++;
    },
    subItem() {
      this.$store.dispatch("subItem");
    },
    showLoading() {
      this.$loading.show("这是loading");
      const timer = setTimeout(() => {
        this.$loading.hide();
        clearTimeout(timer);
      }, 1500);
    },
    showToast() {
      this.$toast.success('成功了');
    }
  }
};
</script>

