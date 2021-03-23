<template>
  <div class="news">
    <navImg v-bind:imgs="imgs" />
    <div class="container">
      <breadcrumb />
    </div>
  </div>
</template>

<script>
import breadcrumb from "@/components/baseComps/breadcrumb.vue";
import navImg from "@/components/baseComps/navImg.vue";

export default {
  // middleware: "metaTitle",
  head() {
      return {
        title: this.title,
        meta: [
          {
            hid: this.title,
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    },
  data() {
    return {
      title:"新闻中心",
      imgs: ["/img/coffee2.jpg"],
    };
  },
  components: {
    navImg,
    breadcrumb,
  },
};
</script>

