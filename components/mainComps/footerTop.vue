<template>
  <div class="footer-top">
    <el-row type="flex" justify="space-between">
      <el-col :span="5">
        <h3>公司简介</h3>
        <div class="footer-content">
          <p>
            巨恒塑胶在众多同行及广大客户中已形成自己独有的经营风格，树立起良好的口碑，我们将继续以良好的信誉，充足的货源去求得更大的发展，共创双赢局面，愿与社会各界人士真诚合作，共同发展，携手共创美好的明天。
          </p>
        </div>
      </el-col>
      <el-col :span="3">
        <h3>产品中心</h3>
        <ul>
          <li>通用塑料</li>
          <li>工程塑料</li>
          <li>特种工程塑料</li>
          <li>合金塑料</li>
        </ul>
      </el-col>
      <el-col :span="5">
        <h3>联系我们</h3>
        <ul>
          <li><i class="el-icon-map-location"></i> 地址：北京朝阳区朝阳市1111号</li>
          <li><i class="el-icon-phone-outline"></i>  电话：13222222222</li>
          <li><i class="el-icon-printer"></i>  传真：1232324234</li>
          <li><i class="el-icon-s-promotion"></i>  邮箱：133333333@163.com</li>
        </ul>
      </el-col>
      <el-col :span="8" class="footer-ewm">
        <div><img src="~/static/img/ewm.png" alt="巨恒塑胶" /><span>阿里巴巴微信</span></div>
        <div><img src="~/static/img/ewm.png" alt="巨恒塑胶" /><span>时十分谨慎看待</span></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.footer-top {
  padding: 60px 0 20px;
  text-align: left;

  .el-col {
    padding: 0 10px;
    ul{
        li{
            font-size: 14px;
            line-height: 30px;
        }
    }
    h3 {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 28px;
    }
    .footer-content {
      font-size: 15px;
      font-weight: 400;
      text-indent:2em;
    }
  }
  .footer-ewm {
    div{
        display: inline-block;
        padding: 10px;
        height: 200px;
            text-align: center;

        span{
            font-size: 14px;
            display: block;
            padding-top: 10px;
        }
    }
    img {
      width: 120px;
    }
  }
}
</style>

