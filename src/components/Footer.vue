<script>
import Newsletter from "./partials/Newsletter.vue";
import FooterInfo from "./partials/FooterInfo.vue";

export default {
  components: {
    Newsletter,
    FooterInfo,
  },
  data() {
    return {
      // store,
    };
  },
};
</script>

<template>
  <footer>
    <Newsletter />
    <FooterInfo />
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
</style>
