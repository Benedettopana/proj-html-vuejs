<script>
export default {};
</script>

<template>
  <div class="container-fluid hero">
    <div
      class="hero-get-started d-flex justify-content-center align-content-center"
    >
      <img
        src="../../../../public/img/jumbotron/hello-hero-rossela-script-1.png"
        alt=""
      />
      <h3>Artist Coaching And Mentoring Might Be for You</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.hero {
  margin-top: 130px;
  position: relative;
  background-color: $color-hint-red;
  .hero-get-started {
    img {
      height: 73px;
      width: 283px;
    }
  }
}
</style>
