<template>
  <div>
    <baidu-map
      class="bdwindow"
      :dragging="dragging"
      :center="center"
      :zoom="zoom"
      style="height: 500px"
      :scroll-wheel-zoom="scroll"
    >
      <bm-info-window :position="center" :title="title" :show="show">
        <p class="bdwtext" v-html="contents"></p>
      </bm-info-window>
    </baidu-map>
  </div>
</template>
<script>

import baiduMap from "vue-baidu-map";
 
export default {
  data() {
    return {
      jump_path: "",
      center: { lng: 114.068907, lat: 22.9166 },
      zoom: 15, //缩放级别
      title: "东莞巨恒塑胶原料有限公司",
      contents: "地址：东莞市樟木头镇樟罗社区帝景花园商铺C56号",
      show: true, //显示标签
      scroll: true, //地图缩放
      dragging: true, //地图拖拽
    };
  },
};
</script>