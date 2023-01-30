<template>
  <div class="articles">
    <div class="top">
      <h1 class="name">{{ sources.srcTitle }}</h1>
      <p>Барчаси <img src="../assets/arrow-right.svg" /></p>
    </div>
    <hr />
    <div class="bottom">
      <router-link
        to="/news-page"
        v-for="card in sources.contents"
        :key="card.key"
        class="card"
      >
        <div class="content">
          <figure class="grey-on-hover">
            <img :src="require('../assets/articles/' + card.img)" alt="image" />
          </figure>
          <h3 class="title">{{ card.title }}</h3>
          <div class="info news-info">
            <div class="theme" :class="'theme' + card.themeColor">
              {{ card.theme }}
            </div>
            <div class="date">{{ card.date }} олдин</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sources"],
};
</script>

<style scoped>
hr {
  margin: 20px 0;
  border-top: 1px solid #d5ddf3;
  opacity: 0.6;
}

.articles {
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
}

.top {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
}

.top:hover .name {
  text-decoration: underline;
}

.top:hover p {
  background: rgba(115, 124, 152, 0.1);
  border-radius: 8px;
}

.top:active p {
  background: rgba(115, 124, 152, 0.2);
  border-radius: 8px;
}

.top .name {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1d3068;
  position: relative;
  padding-left: 24px;
  margin: auto 0;
}

.top .name::before {
  content: "";
  background: url("../assets/hexagon.svg") no-repeat;
  position: absolute;
  top: 7px;
  left: 0;
  width: 13.2px;
  height: 15px;
}

.top p {
  margin: auto 0;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  padding: 6px 20px;
}

.top p img {
  vertical-align: middle;
  margin-left: 10px;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
}

.bottom .card:nth-child(3n + 2) {
  margin: 0 18px;
}

.card {
  width: 408px;
  margin-bottom: 20px;
  cursor: pointer;
}

.content img {
  width: 408px;
  height: 229px;
}

.card .title {
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  margin: 15px 0;
  height: 65px;
}

.info {
  display: flex;
}

.date {
  margin-left: 20px;
  color: #a9aabc;
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
  height: 98.4%;
  transition: opacity 0.3s;
  background: #737c98;
  opacity: 0;
  mix-blend-mode: normal;
  border-radius: 8px;
  z-index: 2;
}

.main .grey-on-hover::before {
  border-radius: 16px;
  height: 99.3%;
}

.main:hover .grey-on-hover::before,
.content:hover .grey-on-hover::before {
  opacity: 0.3;
}
</style>
