<template>
  <div class="prod-list">
    <el-row>
      <el-col
        :span="5"
        v-for="item in products.datas"
        :key="item.id"
        class="product-img"
        :offset="1"
        ><nuxt-link :to="`/products/${item.id}`">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <el-image :src="item.Mainpics[0].main_pic"></el-image>
            <div style="padding: 10px">
              <div class="product-card-top">
                <div class="product-price">￥{{ item.price }}</div>
                <div class="product-sales">>{{ item.stock }}千克</div>
              </div>
              <div class="product-card-content">
                <p>{{ item.title }}</p>
              </div>
              <div class="bottom clearfix product-card-bottom">
                <div class="product-features">
                  <span v-for="i in item.feature" :key="i">{{ i }}</span>
                </div>
                <el-button type="primary" class="button"
                  >产品详情 <i class="el-icon-position el-icon--right"></i
                ></el-button>
              </div>
            </div>
          </el-card>
        </nuxt-link>
      </el-col>
    </el-row>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="products.total"
      :hide-on-single-page="true"
      :page-size="8"
      :current-page="currentPage"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("product", {
      products: (state) => state.products,
    }),
    currentPage() {
      return this.$route.query.page ? +this.$route.query.page : 1;
    },
  },
  watch: {
    $route(res) {
      let pathArr = [];
      if (res.path === "/products" && pathArr[res.fullPath] === undefined) {
        console.log("执行了",pathArr)
        this.$store.dispatch("product/requestProd", { ...res.query });
      }
      pathArr.push(res.fullPath);
    },
  },
  created() {},
  methods: {
    currentChange(n) {
      this.$router.push({
        path: "products",
        query: { ...this.$route.query, page: n },
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.product-img {
  padding-bottom: 20px;
  .el-image {
    width: 200px;
    height: 200px;
  }
  .product-card-top {
    display: flex;
    justify-content: space-between;
    line-height: 24px;
    .product-price {
      max-width: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #ef1f1f;
      font-size: 16px;
      font-weight: 600;
    }
    .product-sales {
      max-width: 45%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      color: #999;
    }
  }
  .product-card-bottom {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 12px;
    }
  }
  .product-card-content {
    text-align: left;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .product-features {
    span {
      font-size: 12px;
      display: inline-block;
      color: #e88f09;
      border: 1px solid rgba(232, 143, 9, 0.3);
      padding: 1px 2px;
      line-height: 1;
      border-radius: 2px;
      font-weight: 400;
      margin: 4px 4px 0px 0px;
    }
  }
}
.product-img:first-child {
  padding-bottom: 19px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  font-size: 12px;
  padding: 6px 8px;
  a {
    color: #fff;
  }
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>