<template>
  <div class="copyright">
    <div class="container">
      <div class="copyright-bottom">
        <p>Copyright © themedream1All Rights Reserved.</p>
        <p>备案号：<a href="/">【粤ICP备1000000000号】</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.copyright {
  border-top: 1px solid #fff;
  .copyright-bottom {
    display: flex;
    height: 50px;
    line-height: 50px;
    justify-content: space-between;
    p {
      font-size: 15px;
      font-weight: 400;
      margin: 0;
      a{
          color: #fff;
      }
    }
  }
}
</style>