<template>
  <div class="news">
    <navImg v-bind:imgs="imgs" />
    <div class="container">
      <breadcrumb />
    </div>
  </div>
</template>

<script>
import navImg from "@/components/baseComps/navImg.vue";
import breadcrumb from "@/components/baseComps/breadcrumb.vue";

export default {
  head() {
      return {
        title: "关于我们",
        meta: [
          {
            hid: "关于我们",
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    },
  data() {
    return {
      imgs: ["/img/coffee2.jpg"],
    };
  },
  components: {
    navImg,
    breadcrumb,
  },
};
</script>

<style lang="scss" scoped>
</style>