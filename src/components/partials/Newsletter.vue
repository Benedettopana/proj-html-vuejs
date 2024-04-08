<script></script>
<template>
  <div id="newsletter" class="container-fluid">
    <!--! img position -->
    <img
      class="img-L"
      src="../../../../public/img/artist-shape-color-paint-top-left-300x170.png"
      alt="artist-shape-color-paint"
    />
    <img
      class="img-R"
      src="../../../../public/img/artist-shape-color-paint-bottom-right-300x153.png"
      alt="artist-shape-color-paint"
    />
    <!--! /img position -->
    <!--% FIXME: centrare -->
    <div class="container-xl">
      <div class="row justify-content-center align-items-center">
        <div class="col-3 d-flex justify-content-center align-items-center">
          <!-- TODO:Cambiare font -->
          <h2 class="text-end ms-3">Newsletter to get in touch</h2>
        </div>
        <div class="col-6 offset-1 d-flex align-items-start">
          <input type="text" class="border-bot" placeholder="Your e-mail" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
#newsletter {
  ////////////////////// DEBUG
  margin-top: 300px;
  ////////////////////// DEBUG
  height: 200px;
  background-color: $color-bay-of-many;
  color: $color-white;
  line-height: 200px;
  // img position
  position: relative;
  .img-L,
  .img-R {
    height: 200px;
    position: absolute;
    top: 0;
  }
  .img-L {
    width: 300px;
    left: 0;
  }
  .img-R {
    width: 360px;
    right: 0;
  }
  .border-bot {
    border-bottom: 2px solid $color-tower-gray;
    width: 80%;
    line-height: 40px;
    background-color: $color-bay-of-many;
  }
  input {
    border: none;
    color: $color-white;
    font-size: 1.3em;
    font-weight: 400;
    &:focus {
      outline: none !important;
    }
  }
}
</style>
