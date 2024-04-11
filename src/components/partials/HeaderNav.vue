<script>
export default {
  props: {
    navItem: Array,
  },
};
</script>
<template>
  <nav id="drop-menu" class="col-6 d-flex justify-content-center">
    <ul class="nav">
      <!--% item navbar -->
      <li
        class="nav-item active dropdown"
        v-for="(element, index) in navItem"
        :key="index"
      >
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
          >{{ element.title }}</a
        >
        <!--% azioni dropdown -->
        <ul class="dropdown-menu">
          <li v-for="(item, index) in element.action" :key="index">
            <a class="dropdown-item" :href="`${item.linkAction}`">{{
              item.titleAction
            }}</a>
          </li>
        </ul>
        <!--% azioni dropdown -->
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
// dropdown menu
#drop-menu {
  font-size: 1em;
  color: $color-cod-gray;
}
</style>
