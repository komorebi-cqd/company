<template>
  <div class="content">
    <banner />
    <myServices />
  </div>
</template>

<script>
import banner from "~/components/mainComps/banner.vue";
import myServices from "~/components/mainComps/myServices.vue";
import topbar from "~/components/topbar.vue";
import navmenu from "~/components/navmenu.vue";
import footers from "~/components/footer.vue";

export default {
  components: {
    banner,
    myServices,
    topbar,
    navmenu,
    footers,
  },
};
</script>

<style>
</style>
