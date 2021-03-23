<!--  -->
<template>
  <div class="detail-header">
    <el-row type="flex" justify="space-around">
      <!-- 产品图片 -->
      <el-col :span="9">
        <!-- <el-image class="detail-img" :src="bigPic" :preview-src-list="srcList">
        </el-image>
        <div class="detail-img-list">
          <a
            v-for="(item, index) in srcList"
            :key="index"
            @click="switchPic(index)"
          >
            <img :src="item" alt="" />
          </a>
        </div> -->
        <el-image class="detail-img" :src="bigPic" :preview-src-list="srcList">
        </el-image>
        <div class="detail-img-list">
          <a
            v-for="(item, index) in datas.Mainpics"
            :key="index"
            @click="switchPic(index)"
          >
            <img :src="item.main_pic" :alt="item.brand" />
          </a>
        </div>
      </el-col>
      <!-- 产品介绍 -->
      <el-col :span="14" class="introduce">
        <div class="detail-title">
          <h3><span>产品名称：</span>{{ datas.title }}</h3>
        </div>
        <div class="detail-common detail-price">
          <p><span>价格：</span>￥{{ datas.price }}</p>
        </div>
        <div class="detail-common detail-address">
          <p><span>发货地：</span> 广东东莞 </p>
        </div>
        <div class="detail-common detail-address">
          <p><span>特性：</span>{{ datas.feature }}</p>
        </div>
        <div class="detail-common detail-address">
          <p><span>品牌：</span>{{ datas.brand }} {{datas.model}}</p>
        </div>
        <div class="detail-common detail-address">
          <p><span>型号：</span>{{ datas.pattern }}</p>
        </div>
        <div class="detail-common detail-number">
          <p><span>库存：</span>≥{{ datas.stock }}公斤</p>
        </div>
        <div class="detail-contact">
          <el-button type="primary" @click="open">获取报价</el-button>
          <el-button type="primary" @click="open">在线留言</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props:["datas"],
  data() {
    return {
      urlIndex: "0",
    };
  },
  methods: {
    switchPic(index) {
      this.urlIndex = index;
    },
    open() {
      this.$prompt("请输入手机您的手机号码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^1[3|4|5|7|8][0-9]{9}$/,
        inputErrorMessage: "手机号码格式不正确",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的手机号是: " + value + "，" + "我们会尽快和您取得联系",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
  computed: {
    srcList(){
      return this.datas.Mainpics.map(item => item.main_pic);
    },
    bigPic() {
      return this.datas.Mainpics[this.urlIndex].main_pic;
    },
  },
  created(){
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.detail-header {
  text-align: left;
  .detail-img {
    width: 400px;
    height: 400px;
    border: 5px solid #ebebeb;
  }

  .detail-img-list {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    a {
      border: 2px solid #ddd;
      width: 90px;
      height: 90px;
      margin-right: 10px;
      img {
        width: 100%;
      }
    }
  }
  .introduce {
    .detail-common {
      padding-top: 20px;
      span {
        font-size: 14px;
        color: #999;
        padding-right: 20px;
      }
    }
    .detail-title {
      font-size: 20px;
      span {
        color: #999;
      }
    }
    .detail-price {
      font-size: 22px;
      font-weight: 400;
      color: #ef1f1f;
    }
    .detail-address {
      font-size: 14px;
    }
    .detail-number {
      font-size: 14px;
    }
    .detail-contact {
      padding-top: 50px;
    }
  }
}
</style>