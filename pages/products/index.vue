<template>
  <el-row>
    <el-col :span="5">
      <!-- 左边列表 -->
      <sidebar :kindList="kindList"/>
    </el-col>
    <el-col :span="19">
      <!-- 搜索 -->
      <search />
      <!-- 产品列表 -->
     <prodList />
    </el-col>
  </el-row>
</template>

<script>
import search from "@/components/productComps/search.vue";
import prodList from "@/components/productComps/prodList.vue";
import sidebar from "@/components/productComps/sidebar.vue";

export default {
  async asyncData({ params,$axios}) {
    const result = await $axios.$get("/api/kindAll");
    if(result.code != 200){
    }
    const kindList = result.data.datas;
    return { kindList}
  },
  async fetch({ store,query, params }) {
    await store.dispatch("product/requestProd",{...query});
  },
  middleware: "metaTitle",
  meta: { title: "产品中心" },
  head: {
    title: "产品中心",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  data() {
    return {
      imgs: ["/img/product.jpg"],

    };
  },

  methods: {
    

  },
  
  mounted(){
  },
  components: {
    sidebar,
    search,
    prodList,
  },
};
</script>

<style lang='scss' scoped>
.products {
  margin-bottom: 50px;
}
</style>