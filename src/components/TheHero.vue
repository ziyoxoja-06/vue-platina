<template>
  <div class="hero">
    <div class="main">
      <router-link to="/news-page" class="featured">
        <figure class="grey-on-hover">
          <img src="../assets/theHero/TheHero1.png" alt="image" />
        </figure>
        <h1 class="title">
          Тошкентдан Олмаотага учган самолёт бўйича қўшимча маълумот берилди
        </h1>
        <p class="desc">
          2023 йил 2 январь куни Тошкент – Олмаота йўналиши бўйича КC128 рейсини
          амалга ошириш чоғида «Air Astana» авиакомпаниясининг самолёти Чимкент
          парвозларни бошқариш маркази ҳудудида 350 (10600 м) баландликда кучли
          турбулентликка учради. Самолёт...
        </p>
        <div class="info">
          <div class="theme theme3 news-info">Жамият</div>
          <div class="date news-info">2 кун олдин</div>
        </div>
      </router-link>
      <hr />
      <div class="news">
        <router-link
          to="/news-page"
          class="item content"
          v-for="item in news"
          :key="item.key"
        >
          <figure class="grey-on-hover">
            <img :src="require('../assets/theHero/' + item.img)" alt="image" />
          </figure>
          <h5 class="title">{{ item.title }}</h5>
          <div class="info">
            <div class="theme news-info" :class="'theme' + item.themeColor">
              {{ item.theme }}
            </div>
            <div class="date news-info">{{ item.date }} олдин</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="sidebar">
      <div class="name">
        Сўнгги янгиликлар
        <img src="../assets/arrow-right.svg" alt="arrow" />
      </div>
      <hr />
      <router-link
        to="/news-page"
        class="latest"
        v-for="news in latest"
        :key="news.key"
      >
        <div class="card">
          <div class="text">
            <h3 class="title">{{ news.title }}</h3>
            <div class="info news-info">
              <div class="theme" :class="'theme' + news.themeColor">
                {{ news.theme }}
              </div>
              <div class="date">{{ news.date }} олдин</div>
            </div>
          </div>
          <figure class="grey-on-hover">
            <img :src="require('../assets/theHero/' + news.img)" alt="image" />
          </figure>
        </div>
        <hr />
      </router-link>
      <a class="side-menu-ad" target="_blank" href="https://t.me/WordleUzBot">
        <img src="../assets/theHero/sidebar-ad.png" alt="ad" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          img: "TheHero2.png",
          title: "Францияда 700 га яқин машина ёқиб юборилди",
          theme: "Жаҳон",
          themeColor: "2",
          date: "2 кун",
        },
        {
          img: "TheHero3.png",
          title:
            "Ўзбекистонда 3 январь куни кузатиладиган об-ҳаво маълумоти эълон қилинди ҳаво маълумоти эълон қилинди",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
      ],
      latest: [
        {
          img: "TheHero4.png",
          title: "Туркияда кўплаб авиарейслар туман сабаб бекор қилинди",
          theme: "Жаҳон",
          themeColor: "2",
          date: "2 кун",
        },
        {
          img: "TheHero5.png",
          title: "Тошкентдаги 31 та олигоҳда дарс вақти ўзгаради",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "TheHero6.png",
          title:
            "Қайси ҳудудда аёл раҳбарлар бошқарувидаги корхоналар сони кўп?",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "TheHero7.png",
          title: "Андижонда сотувчи мижозининг пластик картасидан пул ўғирлади",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "TheHero8.png",
          title:
            "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
        {
          img: "TheHero9.png",
          title:
            "Air Astana авиакомпаниясининг Тошкент-Олмаота рейси йўловчилари жабрланди",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

/* MAIN NEWS */
/* HERO RIGHT */

.main {
  max-width: 820px;
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
}

.main hr {
  margin: 15px 0;
  opacity: 0.6;
  border: 1px solid #d5ddf3;
}

.featured img {
  width: 820px;
  height: 461px;
  margin-bottom: 20px;
  border-radius: 16px;
}

.featured .title {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #1d3068;
  margin-bottom: 10px;
}

.featured .desc {
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  color: #485680;
  margin-bottom: 20px;
}

.info .theme {
  margin-right: 20px;
}

.info .date {
  color: #a9aabc;
}

.info {
  display: flex;
}

.news {
  display: flex;
  justify-content: space-between;
}

.news .item {
  max-width: 401px;
}

.news .item img {
  border-radius: 8px;
}

.news .item .title {
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  height: 60px;
  margin: 15px 0;
}

.news .item .info {
  display: flex;
}

/* SIDEBAR */

.sidebar {
  width: 401px;
  height: fit-content;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  margin-left: 20px;
}

.sidebar .name {
  position: relative;
  padding-left: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1d3068;
  cursor: pointer;
}

.sidebar .name::before {
  content: "";
  background: url("../assets/hexagon.svg") no-repeat center;
  position: absolute;
  top: 7px;
  left: 0;
  width: 13.2px;
  height: 15px;
}

.sidebar .name img {
  vertical-align: middle;
  position: absolute;
  top: -3px;
  right: 0;
  padding: 5.5px 5px;
}

.sidebar .name:hover img {
  background: rgba(115, 124, 152, 0.1);
  border-radius: 8px;
}

.sidebar .name:active img {
  background: rgba(115, 124, 152, 0.2);
  border-radius: 8px;
}

.sidebar .name:hover {
  text-decoration: underline;
}

/* VERTICAL LINE */
/* VERTICAL LINE */

.sidebar hr {
  opacity: 0.6;
  border: 1px solid #d5ddf3;
  margin: 20px 0;
}

.latest .text .title {
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
}

.latest .card {
  display: flex;
}

.latest .card .text {
  width: 280px;
  margin-right: 14px;
}

.latest .card .text .title {
  height: 60px;
  margin-bottom: 10px;
}

/* NEWS IMAGES ON HOVER */

.grey-on-hover {
  position: relative;
}

.grey-on-hover:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98.2%;
  transition: opacity 0.3s;
  background: #737c98;
  opacity: 0;
  mix-blend-mode: normal;
  border-radius: 8px;
  z-index: 2;
}

.content:hover .grey-on-hover::before,
.featured:hover .grey-on-hover::before,
.card:hover .grey-on-hover::before {
  opacity: 0.3;
}

.featured .grey-on-hover::before {
  height: 95.1%;
  border-radius: 16px;
}

.card .grey-on-hover::before {
  height: 96.2%;
}

.card,
.news .item,
.featured {
  cursor: pointer;
}

.side-menu-ad {
  cursor: pointer;
}
</style>
