<!-- 页面导航图片 -->
<template>
  <div class="nav-img">
    <div
      class="nav-bg-img"
      :style="{ background: 'url(' + imgs + ') no-repeat center' }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "/img/product.jpg",
    };
  },
  props: ["imgs"],
  mounted() {
  },
};
</script>

<style lang='scss' scoped>
.nav-img {
  width: 100%;
  text-align: center;
  height: 300px;
  margin-bottom: 30px;
  .nav-bg-img {
    width: 100%;
    height: 300px;
  }
}
</style>