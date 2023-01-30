<template>
  <div class="allNews">
    <div class="news">
      <div class="top">
        <h1 class="name">Барча янгиликлар</h1>
        <p>Барчаси <img src="../assets/arrow-right.svg" /></p>
      </div>
      <hr />
      <router-link
        to="/news-page"
        class="latest"
        v-for="news in newsLimited"
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
            <img :src="require('../assets/allNews/' + news.img)" alt="image" />
          </figure>
        </div>
        <hr />
      </router-link>
      <div class="btn" @click="showMore = true" v-if="!showMore">Яна юклаш</div>
    </div>
    <div class="ad">
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sources: [
        {
          img: "allnews-1.png",
          title:
            "Ўзбекистонда бошланғич синф дарсликлари вазни 300 граммдан оширилмаслиги белгилаб қўйилди",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "allnews-2.png",
          title: "Модрич Саудия клубининг таклифини рад қилди",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
        {
          img: "allnews-3.png",
          title:
            "Тошкентдан Олмаотага учган самолёт бўйича қўшимча маълумот берилди",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "allnews-4.png",
          title: "Францияда 700 га яқин машина ёқиб юборилди",
          theme: "Жаҳон",
          themeColor: "2",
          date: "2 кун",
        },
        {
          img: "allnews-5.png",
          title:
            "Ўзбекистонда 3 январь куни кузатиладиган об-ҳаво маълумоти эълон қилинди",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "allnews-6.png",
          title: "Туркияда кўплаб авиарейслар туман бекор қилинди",
          theme: "Жаҳон",
          themeColor: "2",
          date: "2 кун",
        },
        {
          img: "allnews-7.png",
          title: "Тошкентдаги 31 та олигоҳда дарс вақти ўзгаради",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "allnews-8.png",
          title:
            "Қайси ҳудудда аёл раҳбарлар бошқарувидаги корхоналар сони кўп?",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "allnews-9.png",
          title: "Андижонда сотувчи мижозининг пластик картасидан пул ўғирлади",
          theme: "Жамият",
          themeColor: "3",
          date: "2 кун",
        },
        {
          img: "allnews-10.png",
          title:
            "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
        {
          img: "allnews-10.png",
          title:
            "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
        {
          img: "allnews-10.png",
          title:
            "Саудия клуби Месси исми туширилган либосларни сотувга чиқарди",
          theme: "Спорт",
          themeColor: "5",
          date: "2 кун",
        },
      ],
      showMore: false,
    };
  },
  computed: {
    newsLimited() {
      if (this.showMore) {
        return this.sources;
      } else {
        return this.sources.slice(0, 5);
      }
    },
  },
};
</script>

<style scoped>
hr {
  margin: 20px 0;
  border: 1px solid #d5ddf3;
  opacity: 0.6;
}

.allNews {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.news {
  background: #ffffff;
  padding: 20px;
  border-radius: 16px;
  width: 860px;
  margin-right: 20px;
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

.card {
  display: flex;
  cursor: pointer;
}

.card .text {
  width: 587px;
  margin-left: 20px;
}

.card .text .title {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1d3068;
  margin-bottom: 16px;
  height: 87px;
}

.card .text .info {
  display: flex;
}

.card .text .info .date {
  color: #a9aabc;
  margin-left: 20px;
}

/* .latest:nth-last-child(2) hr, */
.latest:last-child hr {
  display: none;
}

.btn {
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  padding: 14px 0;
  text-align: center;
  background: #f8f8ff;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  margin-top: 20px;
}

.btn:hover {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.05),
      rgba(29, 48, 104, 0.05)
    ),
    #f8f8ff;
}

.btn:active {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.15),
      rgba(29, 48, 104, 0.15)
    ),
    #f8f8ff;
}

.ad {
  width: 420px;
  height: 754px;
  border-radius: 16px;
  background: #ffffff;
  padding: 20px;
}

.box {
  background: #d9d9d9;
  border-radius: 8px;
  height: 100%;
  width: 100%;
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

.card:hover .grey-on-hover::before {
  opacity: 0.3;
}
</style>
