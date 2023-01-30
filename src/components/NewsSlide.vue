<template>
  <div class="news">
    <div class="top">
      <h1 class="title">{{ sources.srcTitle }}</h1>
      <div class="navigation">
        <span class="arr-left" @click="prev">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="disabledNav == 'left' ? 'disabled' : 'active'"
          >
            <rect
              x="-1"
              y="1"
              width="26"
              height="26"
              rx="7"
              transform="matrix(-1 0 0 1 30 4)"
              stroke-width="2"
            />
            <path
              d="M20 14L15.5 18.5L20 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span class="arr-right" @click="next">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="disabledNav == 'right' ? 'disabled' : 'active'"
          >
            <rect x="5" y="5" width="26" height="26" rx="7" stroke-width="2" />
            <path
              d="M16 14L20.5 18.5L16 23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
    <hr />
    <Carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="3.43"
      class="carousel"
    >
      <Slide v-for="slide in sources.contents" :key="slide.key" class="slide">
        <router-link to="/news-page" class="content">
          <figure class="grey-on-hover">
            <img :src="require('../assets/slider/' + slide.img)" alt="image" />
          </figure>
          <h3 class="title">{{ slide.title }}</h3>
          <div class="info news-info">
            <div class="theme" :class="'theme' + slide.themeColor">
              {{ slide.theme }}
            </div>
            <div class="date">{{ slide.date }} олдин</div>
          </div>
        </router-link>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  data() {
    return {
      currentSlide: 0,
      disabledNav: "left",
    };
  },
  props: ["sources"],
  components: {
    Carousel,
    Slide,
  },
  methods: {
    prev() {
      this.currentSlide = 0;
      this.disabledNav = "left";
    },
    next() {
      this.currentSlide = 5;
      this.disabledNav = "right";
    },
  },
};
</script>

<style scoped>
/* HORIZONTAL LINE */
hr {
  margin: 20px;
  border-top: 1px solid #d5ddf3;
  opacity: 0.6;
  padding: 0 20px;
}
.news {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px 0;
  margin-bottom: 30px;
}

.top {
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
}

.top .title {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1d3068;
  position: relative;
  padding-left: 24px;
  margin: auto 0;
}

.top .title::before {
  content: "";
  background: url("../assets/hexagon.svg") no-repeat;
  position: absolute;
  top: 7px;
  left: 0;
  width: 13.2px;
  height: 15px;
}

.carousel {
  padding-left: 11px;
}

.slide {
  width: 378px;
  padding: 0 9px;
  text-align: left;
}

.slide .title {
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  margin: 15px 0;
}

.info {
  display: flex;
}

.date {
  margin-left: 20px;
  color: #a9aabc;
}

.arr-left svg:hover,
.arr-right svg:hover {
  fill: rgba(115, 124, 152, 0.1);
}

svg.disabled:hover {
  fill: none;
}

svg.disabled rect,
svg.disabled path {
  stroke: #d5ddf3;
}

svg.active rect,
svg.active path {
  stroke: #1d3068;
}

svg.active:active path {
  stroke: #d5ddf3;
}

svg.active:active {
  fill: #1d3068;
}

.content:hover img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: #737c98;
  mix-blend-mode: normal;
  opacity: 0.3;
  border-radius: 8px;
  z-index: 10;
}

.content {
  cursor: pointer;
}
.grey-on-hover {
  position: relative;
}

.grey-on-hover:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98%;
  transition: opacity 0.3s;
  background: #737c98;
  opacity: 0;
  mix-blend-mode: normal;
  border-radius: 8px;
  z-index: 2;
}

.content:hover .grey-on-hover::before {
  opacity: 0.3;
}
</style>
