<template>
  <div>
    <the-hero></the-hero>
    <news-slide :sources="source.authChoice"></news-slide>
    <sport-news></sport-news>
    <the-articles :sources="source.articles"></the-articles>
    <all-news></all-news>
    <news-slide :sources="source.businessCarousel"></news-slide>
  </div>
</template>

<script>
import TheHero from "../components/TheHero.vue";
import SportNews from "../components/SportNews.vue";
import AllNews from "../components/AllNews.vue";

export default {
  components: {
    TheHero,
    SportNews,
    AllNews,
  },
  data() {
    return {
      source: {
        authChoice: {
          srcTitle: "Муҳаррир танлови",
          contents: [
            {
              img: "slider-1.png",
              title: "“Амбронол” сиропи ҳам сотувдан олинмоқда",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "slider-2.png",
              title:
                "Вакант лавозимларга энг кўп очиқ танлов ўтказган ташкилотлар маълум қилинди",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "slider-3.png",
              title:
                "“Тизимда жуда катта коррупцион схема авж олиб кетган” — Зарифбой Ибодуллаев",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "slider-4.png",
              title: "2023 йилдаги қўшимча дам олиш кунлари белгиланди",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "slider-5.png",
              title: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "slider-6.png",
              title:
                "Бош прокуратура ЙПХ масъуллари ахбороти асосида тайёрланган кўрсатувга эътироз билдирди",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
          ],
        },
        businessCarousel: {
          srcTitle: "Бизнес",
          contents: [
            {
              img: "slider-business.png",
              title:
                "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди",
              theme: "Таҳлил",
              themeColor: "4",
              date: "2 кун",
            },
            {
              img: "slider-business.png",
              title:
                "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди",
              theme: "Таҳлил",
              themeColor: "4",
              date: "2 кун",
            },
            {
              img: "slider-business.png",
              title:
                "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди",
              theme: "Таҳлил",
              themeColor: "4",
              date: "2 кун",
            },
            {
              img: "slider-business.png",
              title:
                "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди",
              theme: "Таҳлил",
              themeColor: "4",
              date: "2 кун",
            },
            {
              img: "slider-business.png",
              title:
                "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди",
              theme: "Таҳлил",
              themeColor: "4",
              date: "2 кун",
            },
            {
              img: "slider-business.png",
              title:
                "Янги Меҳнат кодексига кўра, қатор ходимлар ишга қабул қилинганда дастлабки синов белгиланмайди",
              theme: "Таҳлил",
              themeColor: "4",
              date: "2 кун",
            },
          ],
        },
        articles: {
          srcTitle: "Мақолалар",
          contents: [
            {
              img: "articles-1.png",
              title: "Оиладаги зўравонлик, аёллар ўлими, етим қолган болалар…",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "articles-2.png",
              title:
                "Маданият вазирлиги ҳузуридаги палата хусусий телерадиоканаллар даромадидан улуш ундирмоқчи",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "articles-3.png",
              title: "Ўзбекистон Исроилдан авокадо импорти ҳажмини оширди",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "articles-4.png",
              title: "Ғофуржон Мирзаев Сирдарё вилояти ҳокимлигидан кетди",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "articles-5.png",
              title:
                "Самарқандда БМТ Бутунжаҳон туризм ташкилоти сессияси ўтказилади",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
            {
              img: "articles-6.png",
              title:
                "Сурхондарёда 1 гектар ерни 100 минг долларга сотмоқчи бўлган",
              theme: "Ўзбекистон",
              themeColor: "1",
              date: "2 кун",
            },
          ],
        },
      },
    };
  },
};
</script>

<style>
.theme1 {
  color: #2da85b;
}
.theme2 {
  color: #003096;
}
.theme3 {
  color: #ff7d25;
}
.theme4 {
  color: #00aead;
}
.theme5 {
  color: #e50029;
}
.theme6 {
  color: #018ad8;
}

.news-info {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
</style>
