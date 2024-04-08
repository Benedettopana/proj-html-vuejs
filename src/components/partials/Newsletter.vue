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
    <div class="container-xl h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-3 d-flex justify-content-center align-items-center">
          <!-- TODO:Cambiare font -->
          <h2 class="text-end ms-3">Newsletter to get in touch</h2>
        </div>
        <div class="col-6 offset-1 d-flex align-items-start">
          <div class="border-bot d-flex justify-content-between">
            <input type="text" class="" placeholder="Your e-mail" />
            <!-- <div class="arr"></div> -->
            <i class="fa-solid fa-arrow-right-long arr"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
#newsletter {
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
    font-size: 1.3em;
    input {
      border: none;
      color: $color-white;
      background-color: $color-bay-of-many;

      font-weight: 400;
      &:focus {
        outline: none !important;
      }
      &::placeholder {
        color: $color-white;
        font-size: 1.1em;
        opacity: 1;
      }
    }
    .arr {
      color: $color-white;
      text-align: end;
      line-height: 40px;
    }
  }
}
</style>
