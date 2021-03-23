<!--  -->
<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col>
        <div class="sidebar-title">产品中心</div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          @open="handleOpen"
          @select="handleSelect"
        >
          <el-submenu
            :index="`${item.id}`"
            v-for="item in kindList"
            :key="item.id"
          >
            <template slot="title">
              <i class="el-icon-takeaway-box"></i>
              <span>{{ item.kind }}</span>
            </template>
            <el-menu-item
              :index="`${level.id}`"
              v-for="level in item.Prodlevels"
              :key="level.id"
              >{{ level.classify }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["kindList"],
  data() {
    return {
      data: {
        input: "",
      },
    };
  },
  created() {},
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key);
    },
    handleSelect(key, keyPath) {
      console.log(keyPath);
      this.$router.push(`/products?kind=${key}`);
    },
  },
};
</script>

<style lang='scss' scoped>
.sidebar {
  .tac {
    border: 4px solid #f9f9f9;
  }
  .el-menu {
    border: none;
  }
  .sidebar-title {
    background-color: #fff;
    height: 100px;
    line-height: 100px;
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    padding-left: 30px;
    border-bottom: 2px dashed #ede8ff;
    margin-bottom: 15px;
  }

  .el-menu-vertical-demo {
    text-align: left;
  }
}
</style>