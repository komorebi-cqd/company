<!--  -->
<template>
  <div class="contact-us">
    <el-row type="flex" justify="space-between">
      <el-col v-for="(item, index) in addres" :key="index" :span="7">
        <el-card class="box-card" shadow="hover">
          <div class="contact-us-icon">
            <i :class="item.icon"></i>
          </div>
          <div class="contact-us-content">
            <p>{{ item.type }}：{{ item.text }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addres: [
        {
          icon: "el-icon-location-information",
          type: "公司地址",
          text: "北京市朝阳区六环",
        },
        {
          icon: "el-icon-phone-outline",
          type: "联系热线",
          text: "138888888888",
        },
        {
          icon: "el-icon-message",
          type: "电子邮箱",
          text: "komorebi_cqd@163.com",
        },
      ],
    };
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.contact-us {
  margin-bottom: 60px;
  .el-row{
    cursor: pointer;
  }
  .contact-us-icon {
    i {
      background-color: #2489EB;
      font-size: 26px;
      border-radius: 50%;
      padding: 16px;
      color: #fff;
    }
  }
  .contact-us-content {
    margin-top: 15px;
    p {
      font-weight: 400;
      font-size: 16px;
      color: #716c80;
      line-height: 24px;
    }
  }
}
</style>