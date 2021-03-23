<!--  -->
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        <a @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import * as pathToRegexp from "path-to-regexp";

export default {
  data() {
    return {
      levelList: null,
    };
  },
  created(){
    this.getLeveList();
  },
  watch:{
    $route(){
      this.getLeveList();
    }
  },
  components: {},
  methods:{
    getLeveList(){
      let matched = this.$route.matched.filter(item => item.name);
      this.levelList = matched;
    },
    handleLink(item){
      const { redirect, path } = item

      if (redirect) {
          this.$router.push(redirect)
          return
        }
      this.$router.push(this.pathCompile(path));
    },
    pathCompile(path) {
        const { params } = this.$route
        var toPath = pathToRegexp.compile(path)//url 的正则表达式,快速填充 url 字符串的参数值。
        return toPath(params)
      },
  }

};
</script>

<style lang='scss' scoped>
.breadcrumb {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
</style>