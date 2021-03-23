<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><nuxt-link to="/products">产品中心</nuxt-link></template>
        <el-menu-item index="2-1">通用塑料</el-menu-item>
        <el-menu-item index="2-2">工程塑料</el-menu-item>
        <el-menu-item index="2-3">特种工程塑料</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        新闻中心
      </el-menu-item>
      <el-menu-item index="4">
        关于我们
      </el-menu-item>
      <el-menu-item index="5">
        联系我们
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  
  methods: {
    handleSelect(key, keyPath) {
      if(key === "1") {
        $nuxt.$router.push("/");
      } else if (new RegExp("2-","g").test(key)) {
        this.$router.push({path: `/products?m=${key}`});
      } else if (key === "3") {
        $nuxt.$router.push("/news");
      } else if (key === "4") {
        $nuxt.$router.push("/about");
      } else if (key === "5") {
        $nuxt.$router.push("/contact");
      }
    },
  },
};
</script>
<style scoped>
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item {
  height: 90px;
  line-height: 90px;
}
</style>
<style>
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 90px;
  line-height: 90px;
}
</style>