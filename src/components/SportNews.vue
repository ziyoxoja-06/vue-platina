<template>
  <div class="news">
    <div class="top">
      <h1 class="name">#Sport</h1>
      <p>Барчаси <img src="../assets/arrow-right.svg" /></p>
    </div>
    <hr class="horizontal" />
    <div class="bottom">
      <router-link to="/news-page" class="main">
        <figure class="grey-on-hover">
          <img src="../assets/sport/sport-1.png" alt="" />
        </figure>
        <div>
          <h1 class="title">Модрич Саудия клубининг таклифини рад қилди</h1>
        </div>
        <div class="info news-info">
          <div class="theme theme5">Спорт</div>
          <div class="date">2 кун олдин</div>
        </div>
      </router-link>
      <hr class="vertical" />
      <div class="sidebar">
        <router-link
          to="/news-page"
          class="card"
          v-for="item in news"
          :key="item.key"
        >
          <div class="content">
            <div class="text">
              <h3 class="name">{{ item.title }}</h3>
              <div class="info news-info">
                <div class="theme" :class="'theme' + item.themeColor">
                  {{ item.theme }}
                </div>
                <div class="date">{{ item.date }} олдин</div>
              </div>
            </div>
            <figure class="grey-on-hover">
              <img :src="require('../assets/sport/' + item.img)" />
            </figure>
          </div>
          <hr class="horizontal" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          img: "sport-2.png",
          title:
            "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
        {
          img: "sport-3.png",
          title: "Луис Суарес «Гремио» билан шартнома имзолади",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
        {
          img: "sport-4.png",
          title:
            "Криштиану Роналду «Ан Наср» билан икки йиллик шартнома имзолади",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
        {
          img: "sport-5.png",
          title:
            "Роналду ва Рамос битта жамоада фаолиятини давом эттириши мумкин",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
        {
          img: "sport-6.png",
          title: "Элдор Шомуродов «Торино»га ўтиши мумкин",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* HR HORIZONTAL */
hr.horizontal {
  margin: 20px 0;
  border: 1px solid #d5ddf3;
  opacity: 0.6;
}

/* HR VERTICAL */
hr.vertical {
  margin: 0 20px;
  border-left: 1px solid #d5ddf3;
  opacity: 0.6;
}

.news {
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
}

.main {
  cursor: pointer;
}

.main .title {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #1d3068;
  height: 76px;
  margin: 20px 0;
}

.main .info {
  display: flex;
}

.main .info .date {
  margin-left: 20px;
  color: #a9aabc;
}

.content {
  display: flex;
  cursor: pointer;
}

.content .text {
  width: 280px;
  margin-right: 34px;
}

.content .text .name {
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  height: 60px;
  width: 280px;
}

.content .text .info {
  display: flex;
  margin-top: 9px;
}

.content .text .info .date {
  color: #a9aabc;
  margin-left: 20px;
}

.sidebar .card:last-child hr {
  display: none;
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
  height: 96%;
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
