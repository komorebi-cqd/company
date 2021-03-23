<template>
  <div class="contact-map">
    <el-row type="flex" justify="space-between">
      <el-col :span="11">
        <div>
         <online />
        </div>
      </el-col>
      <el-col :span="11">
        <div class="contact-form">
          
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import online from "./onlineMsg"

export default {
  data() {
    return {
      
    };
  },

  components: {
      online,
  },
};
</script>

<style lang='scss' scoped>
</style>