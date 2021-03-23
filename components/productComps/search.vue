<!-- 搜索组件 -->
<template>
  <div class="search">
    <span>型号搜索：</span> 
    <el-input
      placeholder="请输入您要搜索的产品"
      v-model="input"
      @change="onInput"
      clearable
    >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input:""
    };
  },
  methods: {
    onInput: function () {
      this.$router.push({
        path: "products",
        query: { wd: this.input },
      });
      this.input = "";
    },
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.search{
    margin-bottom: 40px;
    span{
      font-size: 16px;
    }
    .el-input-group{
        width: 33%;
    }
}
</style>