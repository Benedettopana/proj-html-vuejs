<script>
import { store } from "../../data/store.js";

export default {
  props: {},
  data() {
    return {
      store,
      imgPath: "../../../../public/img/article/",
      imgBig: "artist-blog-02-500x680.jpg",
      imglittle1: "artist-blog-03-480x356.jpeg",
      imglittle2: "artist-blog-01-480x356.jpg",
      icon: {
        calendar: "calendar-alt.svg",
        eye: "eye.svg",
        calendarl: "calendar-altlittle.svg",
        eyel: "eyelittle.svg",
      },
    };
  },
};
</script>

<template>
  <div>
    <div class="row">
      <!-- ? Card laterale -->
      <div class="col-3 cont">
        <div id="art-uno" class="little-card">
          <img :src="`${imgPath}${imglittle1}`" alt="art1" />
          <div class="info-little">
            <p>ARTIST</p>
            <h5>Brush Strokes Energize Trees in Paintings</h5>
            <span class="me-3">
              <img :src="`${imgPath}${icon.calendarl}`" alt="calendar" />
              May 15, 2020
            </span>
            <span>
              <img :src="`${imgPath}${icon.eyel}`" alt="prova" />
              688 views
            </span>
          </div>
        </div>
      </div>
      <!-- ? Card laterale -->
      <!-- !Card centrale -->
      <div class="col-6 cont">
        <div class="big-card">
          <img :src="`${imgPath}${imgBig}`" alt="" />
          <div class="big-content">
            <p>artist</p>
            <h2>Connection Between Self- Portrait and Identity</h2>
            <span class="me-3">
              <img :src="`${imgPath}${icon.calendar}`" alt="calendar" />
              May 15, 2020
            </span>
            <span>
              <img :src="`${imgPath}${icon.eye}`" alt="calendar" />
              397views
            </span>
          </div>
        </div>
      </div>
      <!-- ? Card laterale -->
      <div class="col-3 cont">
        <div id="art-due" class="little-card">
          <img :src="`${imgPath}${imglittle2}`" alt="art2" />
          <div class="info-little">
            <p>ARTIST</p>
            <h5>Pocket-Sized Notebooks Hold Miniature Paintings</h5>
            <span class="me-3">
              <img :src="`${imgPath}${icon.calendarl}`" alt="calendar" />
              May 15, 2020
            </span>
            <span>
              <img :src="`${imgPath}${icon.eyel}`" alt="prova" />
              603 views
            </span>
          </div>
        </div>
      </div>
      <!-- ? Card laterale -->
    </div>

    <div class="all-post">
      <p>
        Get into details now?
        <span
          ><a href="#"
            >View all posts <i class="fa-solid fa-arrow-right-long"></i></a
        ></span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
.cont {
  display: flex;
  justify-content: center;
  position: relative;
  .big-card {
    width: 500px;
    height: 680px;
    position: relative;
    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .big-content,
  .little-content {
    z-index: 30;
    width: 100%;
    position: absolute;
    top: 70%;
    left: 40px;
    color: $color-white;
    font-weight: 400;

    P {
      text-transform: uppercase;
    }
    h2 {
      font-size: 2em;
      font-weight: bolder;
    }
    img {
      width: 18px;
      aspect-ratio: 1;
    }
  }

  .little-content {
    height: 183px;
    background-color: $color-white;
  }
  #art-uno {
    margin-top: 160px;
  }
  #art-due {
    margin-top: 54px;
  }
  .little-card {
    height: 384px;
    width: 270px;
    // width: 100%;

    img {
      height: 201;
      width: 100%;
    }
    .info-little {
      height: 183px;
      background-color: $color-white;
      color: $color-pickled-bluewood;
      padding: 25px 20px;
      span {
        font-size: 0.8em;
      }
      img {
        width: 18px;
        aspect-ratio: 1;
      }
    }
  }
}

.all-post {
  position: relative;
  margin-top: 110px;
  text-align: center;
  color: $color-details;
  font-size: 1.05em;
  font-weight: bold;
  a {
    color: $color-tussock-tag !important;
  }
}
</style>
