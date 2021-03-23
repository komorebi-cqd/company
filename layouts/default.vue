<template>
  <div>
    <el-container>
      <el-header height="125px">
        <topbar />
        <navmenu />
      </el-header>
      <el-main><Nuxt keep-alive/></el-main>
      <el-footer height="424px"><footers /></el-footer>
    </el-container>
  </div>
</template>

<script>
import topbar from "~/components/topbar.vue";
import navmenu from "~/components/navmenu.vue";
import footers from "~/components/footer.vue";

export default {
  components: {
    topbar,
    navmenu,
    footers,
  },
};
</script>


<style >
body{
  padding-right: 0px !important; 
}
.container{
  margin: 0 auto;
}


.el-container .el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0px;
}

.el-footer {
  background-color: #B3C0D1;
  color: #fff;
  background-color: #666;
  height: 300px;
  padding: 0;
}
.el-main {
  color: #333;
  padding: 0px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
