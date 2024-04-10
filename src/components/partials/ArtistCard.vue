<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      imgPath: "../../../../public/img/artist/",
      file: "file.svg",
      user: "user.svg",
    };
  },
};
</script>
<template>
  <div class="artist-card">
    <div class="photo">
      <img :src="`${imgPath}${item.img}`" :alt="item.title" />
    </div>
    <div class="arti-info">
      <p class="price">{{ item.price }}</p>
      <p class="title">{{ item.title }}</p>
      <div class="info">
        <span>
          <img class="icon" :src="`${imgPath}${file}`" alt="" />
          {{ item.lesson }}
        </span>
        <span>
          <img class="icon" :src="`${imgPath}${user}`" alt="" />
          {{ item.student }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.artist-card {
  width: 332px;
  height: 490px;
  font-size: 1.08em;
  font-weight: 600;
  position: relative;
  padding: 5px;

  .photo {
    width: 100%;
    height: 328px;

    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .arti-info {
    height: 37%;
    width: 90%;
    padding: 20px 24px;
    background-color: $color-white;
    // animation: movementUp 0.7s;
    transition: all 3s !important;
    .price {
      color: $color-tussock-tag;
      &::before {
        content: "\FF04";
      }
    }

    .title {
      font-size: 1em;
    }

    .info {
      margin: -17px;
      span {
        font-size: 0.9em;
        margin-right: 20px;
        color: $color-dusty-gray;
        .icon {
          width: 50px;
          // height: 16px;
        }
      }
    }
  }

  &:hover .arti-info {
    position: absolute;
    bottom: 63px;
    border: 2px solid $color-tussock-tag;
    // margin-bottom: 50px;
  }
  &:hover img {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  @keyframes movementUp {
    from {
      bottom: 0;
    }

    to {
      bottom: 63px;
    }
  }
}
</style>
