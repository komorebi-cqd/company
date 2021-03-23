<!--  -->
<template>
  <div>
    <form
      method="post"
      class="contact-validation-active"
    >
      <div><input type="text" name="name" id="name" placeholder="Name*" /></div>
      <div>
        <input type="email" name="email" id="email" placeholder="Email*" />
      </div>
      <div class="fullwidth">
        <select name="subject">
          <option disabled="disabled" selected="">Contact subject</option>
          <option>Subject 1</option>
          <option>Subject 2</option>
          <option>Subject 3</option>
        </select>
      </div>
      <div class="fullwidth">
        <textarea
          id="note"
          placeholder="Case Description..."
        ></textarea>
      </div>
      <div class="submit-area">
        <button type="submit" class="theme-btn">Submit It Now</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang='scss' scoped>
</style>