<script>
import JumbotronContent from "./JumbotronContent.vue";
export default {
  components: {
    JumbotronContent,
  },
  data() {
    return {
      imgPath: "../../../../public/img/jumbotron/",
      artist: {
        hero: [
          "artist-hero-image-01.jpg",
          "artist-hero-image-02.jpg",
          "artist-hero-image-03.png",
          "artist-hero-image-04.jpg",
        ],
        shape: [
          "artist-shape-01.png",
          "artist-shape-02.png",
          "artist-shape-03.png",
          "artist-shape-04.png",
          "artist-shape-05.png",
        ],
      },
    };
  },
};
</script>
<template>
  <div class="container-fluid hero">
    <!--? img hero -->
    <div class="artist-1">
      <img :src="`${imgPath}${artist.hero[0]}`" alt="" />
    </div>
    <div class="artist-2">
      <img :src="`${imgPath}${artist.hero[1]}`" alt="" />
    </div>
    <div class="artist-3">
      <img :src="`${imgPath}${artist.hero[2]}`" alt="" />
    </div>
    <div class="artist-4">
      <img :src="`${imgPath}${artist.hero[3]}`" alt="" />
    </div>
    <!--? /img hero -->
    <!--* img shape -->
    <div class="shape-1">
      <img :src="`${imgPath}${artist.shape[0]}`" alt="" />
    </div>
    <div class="shape-2">
      <img :src="`${imgPath}${artist.shape[1]}`" alt="" />
    </div>
    <div class="shape-3">
      <img :src="`${imgPath}${artist.shape[2]}`" alt="" />
    </div>
    <div class="shape-4">
      <img :src="`${imgPath}${artist.shape[3]}`" alt="" />
    </div>
    <div class="shape-5">
      <img :src="`${imgPath}${artist.shape[4]}`" alt="" />
    </div>
    <!--* /img shape -->
    <!--? Component contenuto JUMBOTRON -->
    <JumbotronContent />
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.hero {
  margin-top: 130px;
  height: 740px;
  position: relative;
  background-color: $color-hint-red;

  // TODO:Migliorare z-index
  .artist-1,
  .artist-2,
  .artist-3,
  .artist-4,
  .shape-1,
  .shape-2,
  .shape-3,
  .shape-4,
  .shape-5 {
    position: absolute;
  }

  // ARTIST
  .artist-1 {
    height: 250px;
    width: 192px;
    bottom: 64px;
    left: 145px;
    z-index: 10;
  }
  .artist-2 {
    height: 370px;
    width: 287px;
    bottom: 272px;
    left: 332px;
    z-index: 9;
  }
  .artist-3 {
    height: 324px;
    width: 225px;
    bottom: 28px;
    left: 481px;
    z-index: 8;
  }
  .artist-4 {
    height: 419px;
    width: 329px;
    bottom: 52px;
    right: 238px;
    z-index: 8;
  }
  // /ARTIST

  // SHAPE
  .shape-1 {
    height: 714px;
    width: 700px;
    top: 0px;
    right: 135px;
    z-index: 1;
  }
  .shape-2 {
    width: 905px;
    left: 0;
    z-index: 1;
  }
  .shape-3 {
    width: 335px;
    top: 159px;
    left: 15px;
    z-index: 3;
  }
  .shape-4 {
    height: 306px;
    top: 82px;
    right: 156px;
    z-index: 3;
  }
  // /SHAPE
}
</style>
