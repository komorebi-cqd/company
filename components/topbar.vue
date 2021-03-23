<template>
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <nuxt-link to="/"><i class="el-icon-s-home"></i>首页</nuxt-link>
        欢迎来到巨恒塑胶
      </div>
      <div class="topbar-right">
        <div class="tel">联系热线：13211111111</div>
        <nuxt-link to="/about" class="about">关于我们</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

.topbar {
  font-size: 16px;
  color: #333;
  width: 100%;
  height: 35px;
  line-height: 35px;
  background-color: #fafafa;
}
.el-icon-s-home {
  color: #2489EB;
  padding-right: 5px;
}

.topbar-left{
  float: left;
}

.topbar-left a{
  padding-right: 15px;
}

.topbar-right{
  float: right;;
}

.topbar .tel {
  display: inline;
}

.topbar .about{
  padding-right: 10px;
  padding-left: 20px;
}
</style>