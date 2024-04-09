<script>
export default {
  props: {
    elem: Array,
  },
  data() {
    return {
      imgPath: "../../../../public/img/point/",
    };
  },
};
</script>
<template>
  <div class="container-xl">
    <div class="row row-cols-2">
      <div class="col d-flex" v-for="(item, index) in elem" :key="index">
        <div
          :class="index == 1 ? 'top-spacing' : 'right-spacing'"
          v-for="(element, index) in item"
          :key="index"
        >
          <img
            :id="index == 1 ? 'pointImg-second' : 'pointImg-first'"
            :src="`${imgPath}${element.pointImg}`"
            alt=""
          />
          <h4>{{ element.title }}</h4>
          <p>{{ element.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.right-spacing {
  margin-right: 30px;
}
.top-spacing {
  margin-top: 30px;
}
#pointImg-second,
#pointImg-first {
  width: 130px;
}
#pointImg-first {
  // height: 100px;
  // width: 125px;
  height: 116px;
}
#pointImg-second {
  height: 85px;
}

p {
  // font-size: 0.9em;
}
</style>
