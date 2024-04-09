<script>
import { store } from "../../data/store";
import BtnPrimary from "./BtnPrimary.vue";
export default {
  components: {
    BtnPrimary,
  },
  data() {
    return {
      store,
      imgPath: "../../../../public/img/citation/",
      quote: "artist-quote-icon.png",
      script: "martin-garrix.png",
    };
  },
};
</script>
<template>
  <div id="citation" class="container-xl">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col d-flex flex-column">
        <div class="d-flex justify-content-center">
          <img class="quote" :src="`${imgPath}${quote}`" :alt="`${script}`" />
        </div>

        <h2>
          I coach and mentor visual artists, like you, to Create Like You Mean
          lt
        </h2>
        <div class="d-flex justify-content-center">
          <img class="script" :src="`${imgPath}${script}`" :alt="`${script}`" />
        </div>
      </div>
      <div class="col started">
        <p>
          As a coach and mentor, my ultimate goal is to motivate visual artists
          toward inspired action. I help you get you back on track to being the
          productive, creative, meaningful and authentic artist you truly want
          to be.l support artists in crafting and living a creative life as well
          as feeling good about themselves and their art.
        </p>
        <p class="my-4">
          As an artist and an educator for nearly 30 years, I understand what it
          takes to create.
        </p>
        <BtnPrimary :btnContent="store.button.coaching" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

#citation {
  margin-top: 200px;
  .quote {
    width: 40px;
    height: 32px;
  }
  .script {
    width: 200px;
    height: 56px;
  }
  h2 {
    text-align: center;
    line-height: 57px;
    font-weight: 800;
    font-size: 2.3em;
    width: 431px;
    margin: 36px auto;
  }
  .started {
    margin-top: 70px;
    line-height: 30px;
    font-size: 1.1em;
  }
}
</style>
