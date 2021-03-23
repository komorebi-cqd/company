<template>
  <div class="products">
    <navImg v-bind:imgs="imgs" />
    <div class="container">
      <breadcrumb />
      <NuxtChild keep-alive />
    </div>
  </div>
</template>

<script>
import navImg from "@/components/baseComps/navImg.vue";
import breadcrumb from "@/components/baseComps/breadcrumb.vue";



export default {
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
      childInput: "",
    };
  },
  methods: {
    fusearch: function (data) {
      this.childInput = data;
    },
  },
  components: {
    navImg,
    breadcrumb,
  },
};
</script>

<style lang='scss' scoped>
.products {
  margin-bottom: 50px;
}
</style>