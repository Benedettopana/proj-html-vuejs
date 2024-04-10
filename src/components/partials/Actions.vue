<script>
export default {};
</script>
<template>
  <div class="actions">
    <div class="my-2">
      <i class="fa-solid fa-ruler-combined mb-1"></i>
    </div>
    <div class="my-2"><i class="fa-regular fa-circle-question mb-1"></i></div>
    <div class="my-2"><i class="fa-solid fa-book-journal-whills mb-1"></i></div>
    <div class="my-2"><i class="fa-solid fa-cart-shopping mb-1"></i></div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 163px;
  width: 40px;
  background-color: $color-white;
  border-radius: 3px;
  position: fixed;
  z-index: 999;
  top: 200px;
  right: 0;
  i {
    width: 20px;
    margin: 0 auto;
    aspect-ratio: 1;
    cursor: pointer;
  }
}
</style>
