<template>
  <div class="contact">
          <navImg v-bind:imgs="imgs" />
          <div class="container">
            <breadcrumb />
            <contactUs />
            <contactMap />
          </div>
        </div>
</template>

<script>
import navImg from "@/components/baseComps/navImg.vue";
import breadcrumb from "@/components/baseComps/breadcrumb.vue";
import contactUs from "@/components/contactComps/contactUs.vue";
import contactMap from "@/components/contactComps/contactMap.vue";


export default {
  head() {
      return {
        title: "联系我们",
        meta: [
          {
            hid: "联系我们",
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    },
  components: {
    navImg,
    breadcrumb,
    contactUs,
    contactMap,
 
  },
};
</script>

<style lang="scss" scoped>
</style>