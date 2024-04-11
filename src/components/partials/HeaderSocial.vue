<script>
export default {
  props: {
    icon: Array,
  },
};
</script>
<template>
  <div class="social" v-for="(element, index) in icon" :key="index">
    <a :href="element.iconLink" target="_blank">
      <i :class="element.icon"></i>
    </a>
  </div>
  <!-- <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-facebook-f"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-linkedin"></i> -->
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
// social menu

i {
  align-content: center;
  color: $color-boulder;
  // color: $color-dusty-gray;
  font-size: 1.1em;
  margin: 0 0.7em;
}
</style>
