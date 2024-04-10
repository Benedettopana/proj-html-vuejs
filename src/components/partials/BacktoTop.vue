<script>
export default {};
</script>
<template>
  <a class="top" href="#">
    <i class="fa-solid fa-arrow-up-long"></i>
  </a>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.top {
  width: 60px;
  aspect-ratio: 1;

  background-color: $color-tussock-tag;

  text-align: center;
  line-height: 60px;
  border-radius: 50%;
  // POSIZIONAMENTO
  position: fixed;
  top: 850px;
  right: 65px;
  z-index: 999;
  color: $color-white !important;
}
</style>
