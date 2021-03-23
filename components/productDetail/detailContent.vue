<!--  -->
<template>
  <div class="detail-introduce">
    <img v-for="item in Details" :key="item.id" :src="item.detail_pic" :alt="item.model" />
    <div>{{ detailText }}</div>
  </div>
</template>

<script>
export default {
  props:["detailText","Details"],
  data() {
    return {
      
    };
  },
  components: {},
};
</script>

<style lang='scss' scoped>
  .detail-introduce {
    width: 100%;
    text-align: center;
    background-color: #ddd;
  }
</style>