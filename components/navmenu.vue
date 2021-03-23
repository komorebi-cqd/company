<!-- 顶部导航菜单 -->

<template>
  <div class="nav">
    <div class="container">
      <el-row>
        <el-col :span="3">
          <div class="logo">
            <img src="~/static/img/logo.png" />
          </div>
        </el-col>
        <el-col :span="12" :offset="9">
          <div class="navmenu">
            <navigation />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
import navigation from "./navigation";

export default {
  components: {
    navigation,
  },
  
};
</script>


<style scoped>
.el-row{
  height: 100%;
}
.nav {
  height: 90px;
  line-height: 90px;
}
.logo{
  height: 90px;
}
.logo img {
  padding-top: 5px;
  width: 80px;
}

</style>
