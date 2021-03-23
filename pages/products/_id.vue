<!--产品详情  -->
<template>
  <div class="prod-detail">
    <detailHeader :datas="datas"/>
    <detailContent :detailText="detailText" :Details="Details"/>
  </div>
</template>

<script>
import detailHeader from "@/components/productDetail/detailHeader";
import detailContent from "@/components/productDetail/detailContent";

export default {
  async asyncData({ params,$axios}) {
    const result = await $axios.$get(`/api/products/${params.id}`)
    if(result.code != 200){
    }
    const datas = result.data.datas;
    return { detailText: datas.detailText ,Details:datas.Details,datas}
  },
  data() {
    return {
      
      
    };
  },
  components: {
    detailHeader,
    detailContent,
  },
};
</script>

<style lang='scss' scoped>

</style>