<template>
  <div class="footer">
      <div class="container">
          <footer-top />
          <footer-bottom />
      </div>
      <copyright />
  </div>
</template>

<script>
import footerTop from "@/components/mainComps/footerTop"
import footerBottom from "@/components/mainComps/footerBottom"
import copyright from "@/components/mainComps/copyright"

export default {
  components:{
    footerTop,
    footerBottom,
    copyright,
  }
}
</script>

<style scoped>
    
</style>>
