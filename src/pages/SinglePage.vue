<template>
  <div>
    <div class="single">
      <div class="main">
        <div class="featured">
          <h1 class="title">
            Кечадан ўқиш бошланган мактабларда иссиқлик талабга жавоб берадими?
          </h1>
          <p class="info">
            Маҳаллий ҳокимликлар чиқарган қарорга кўра, кеча, яъни 11 январдан
            кўпгина мактабларда ўқиш жараёни бошланди. Ташқаридаги ҳаво ҳарорати
            эса сўнгги йиллардаги айни шу мавсум кўрсаткичидан анча юқори.
          </p>
          <div class="stats">
            <div class="news-info">
              <div class="theme theme3">Жамият</div>
              <div class="date">2 январь, 11:12</div>
            </div>
            <div class="tools news-info">
              <div class="views">
                <img src="../assets/single/eye.svg" alt="eye" /> 15879
              </div>
              <div class="share" @click="shareTop = !shareTop">
                <span class="current">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5055 15.7416C14.7466 15.7416 15.7527 14.7355 15.7527 13.4944C15.7527 12.2533 14.7466 11.2472 13.5055 11.2472C12.2644 11.2472 11.2583 12.2533 11.2583 13.4944C11.2583 14.7355 12.2644 15.7416 13.5055 15.7416Z"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.76367 10.1235L11.2581 12.3707"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.51672 11.2472C5.75781 11.2472 6.76392 10.2411 6.76392 9C6.76392 7.75891 5.75781 6.75281 4.51672 6.75281C3.27563 6.75281 2.26953 7.75891 2.26953 9C2.26953 10.2411 3.27563 11.2472 4.51672 11.2472Z"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.2581 5.62915L6.76367 7.87634"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5055 6.75281C14.7466 6.75281 15.7527 5.74671 15.7527 4.50562C15.7527 3.26453 14.7466 2.25842 13.5055 2.25842C12.2644 2.25842 11.2583 3.26453 11.2583 4.50562C11.2583 5.74671 12.2644 6.75281 13.5055 6.75281Z"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Улашиш
                </span>
                <div class="links" v-if="shareTop">
                  <div class="link" v-for="item in shareLinks" :key="item.key">
                    <div class="img">
                      <img
                        :src="require('../assets/single/' + item.icon)"
                        alt="icon"
                      />
                    </div>
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="banner">
            <img src="../assets/single/banner.png" alt="image" />
          </div>
          <div class="credit">Фото: Platina.uz</div>
          <div class="text">
            <p>
              Маҳаллий ҳокимликлар чиқарган қарорга кўра, кеча, яъни
              <a href="#">11 январдан</a>
              кўпгина мактабларда ўқиш жараёни <a href="#">бошланди</a>.
              Ташқаридаги ҳаво ҳарорати эса сўнгги йиллардаги айни шу мавсум
              кўрсаткичидан анча юқори. Яъни “Ўзгидромет”нинг тақдим этган
              <a href="#">маълумотига кўра</a>, 12-15 январда республика бўйича
              аномал совуқ об-ҳаво бўлиши кутилмоқда. Хўш, бундай совуқ
              ҳароратда 11 январдан ўқиш жараёнлари бошланган мактабларда
              иссиқлик талаблари қандай бўлиши керак? Санитария-эпидемиология
              хизмати ана шу талабларни <a href="#">эслатиб ўтди</a>:
            </p>
            <ul>
              <li>
                <p>
                  Таълим муассасаларининг ўқув хоналарида ҳаво ҳарорати 16º С
                  дан паст бўлмаслиги керак
                </p>
              </li>
              <li>
                <p>
                  Таълим муассасаларининг ўқув хоналарида машғулотлар ўтказишда
                  меҳнатни муҳофаза қилиш талабларига мувофиқ ўқув хоналарида
                  ҳаво ҳарорати енгил жисмоний ишда 21º С, ўртача оғир ишда 17º
                  С ва оғир ишда 16º С дан паст бўлмаслиги керак.
                </p>
              </li>
              <li>
                <p>
                  Физика ўқув лаборатория хонасида мунтазам равишда ҳарорат 18º
                  С – 21º С, ҳавонинг намлиги 40 – 60 фоиз бўлиши керак.
                </p>
              </li>
              <li>
                <p>
                  Таълим муассасаси ҳудудидаги ҳожатхоналар иссиқ сув ва
                  канализация тизимига уланган бўлиши лозим.
                </p>
              </li>
              <li>
                <p>
                  Таълим муассасасида канализация тизими йўқ бўлганда давлат
                  санитария назорати органлари билан келишилган ҳолда таълим
                  муассасасида ер қатламини ифлослантирмаган ҳолда душхоналардан
                  ва юз-қўл ювгичлардан сув оқмайдиган қурилмали ахлат
                  ўраларининг мавжуд бўлишига рухсат этилади.
                </p>
              </li>
              <li>
                <p>
                  Информатика ўқув хонасини ертўлаларда жойлаштириш тақиқланади.
                </p>
              </li>
              <li>
                <p>
                  Ўқув устахоналаридаги иш ўрни ҳар қандай бахтсиз ҳодисанинг
                  олдини олишга қаратилган ҳолда ташкил қилинган бўлиши керак.
                </p>
              </li>
              <li>
                <p>
                  Хўш, кечадан дарс ўтилаётган мактаблардаги иссиқлик шу
                  талабларга жавоб берадими?
                </p>
              </li>
            </ul>
          </div>
          <div class="outer">
            <div class="hashes">
              <div class="hash">
                <img src="../assets/single/hash.svg" alt="hashtag" />
                Мактаб
              </div>
              <div class="hash">
                <img src="../assets/single/hash.svg" alt="hashtag" />
                Иссиқлик
              </div>
            </div>
            <div class="shareView">
              <div class="view">
                <img src="../assets/single/eye.svg" alt="eye" /> 15879
              </div>
              <div class="share" @click="shareBottom = !shareBottom">
                <span class="current">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5055 15.7416C14.7466 15.7416 15.7527 14.7355 15.7527 13.4944C15.7527 12.2533 14.7466 11.2472 13.5055 11.2472C12.2644 11.2472 11.2583 12.2533 11.2583 13.4944C11.2583 14.7355 12.2644 15.7416 13.5055 15.7416Z"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.76367 10.1235L11.2581 12.3707"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.51672 11.2472C5.75781 11.2472 6.76392 10.2411 6.76392 9C6.76392 7.75891 5.75781 6.75281 4.51672 6.75281C3.27563 6.75281 2.26953 7.75891 2.26953 9C2.26953 10.2411 3.27563 11.2472 4.51672 11.2472Z"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.2581 5.62915L6.76367 7.87634"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5055 6.75281C14.7466 6.75281 15.7527 5.74671 15.7527 4.50562C15.7527 3.26453 14.7466 2.25842 13.5055 2.25842C12.2644 2.25842 11.2583 3.26453 11.2583 4.50562C11.2583 5.74671 12.2644 6.75281 13.5055 6.75281Z"
                      stroke="#A9AABC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Улашиш
                </span>
                <div class="links" v-if="shareBottom">
                  <div class="link" v-for="item in shareLinks" :key="item.key">
                    <div class="img">
                      <img
                        :src="require('../assets/single/' + item.icon)"
                        alt="icon"
                      />
                    </div>
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ad">
        <div class="box"></div>
      </div>
    </div>
    <the-articles :sources="source.related"></the-articles>
    <news-slide :sources="source.businessCarousel"></news-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      source: {
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
        related: {
          srcTitle: "Мавзуга оид",
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
          ],
        },
      },
      shareTop: false,
      shareBottom: false,
      shareLinks: [
        {
          icon: "share-tg.svg",
          name: "Telegram",
        },
        {
          icon: "share-fb.svg",
          name: "Facebook",
        },
        {
          icon: "share-tw.svg",
          name: "Twitter",
        },
        {
          icon: "share-link.svg",
          name: "Ҳаволадан нусха олиш",
        },
      ],
    };
  },
};
</script>

<style scoped>
.single {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}
.ad {
  width: 420px;
  height: 754px;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
}

.box {
  background: #d9d9d9;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

.main {
  width: 860px;
  margin-right: 22px;
}

.featured {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
}

.featured .title {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #1d3068;
}

.featured .info {
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1d3068;
  margin: 12px 0 1px;
}

.featured .stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.featured .stats .news-info {
  display: flex;
  margin: auto 0;
}

.featured .stats .news-info .date {
  color: #a9aabc;
  margin-left: 20px;
}

.featured .stats .tools .views,
.featured .stats .tools .share .current {
  color: #a9aabc;
  padding: 10px 18px;
}

.featured .stats .tools .views img,
.featured .stats .tools .share svg {
  margin-right: 5px;
  vertical-align: middle;
}

.featured .stats .tools .share .current:hover {
  color: #1d3068;
}

.banner {
  border-radius: 16px;
}

.credit {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a9aabc;
  margin: 12px 0 20px;
}

.text {
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1d3068;
}

.text a {
  color: #0066cc;
}

.text a:hover {
  border-bottom: 1px solid #0066cc;
}

.outer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.hashes,
.shareView {
  display: flex;
  margin: auto 0;
}

.hash {
  margin-right: 10px;
  background: #f8f8ff;
  border-radius: 8px;
  padding: 7px 10px;
  cursor: pointer;
  color: #1d3068;
}

.hash:hover {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.05),
      rgba(29, 48, 104, 0.05)
    ),
    #f8f8ff;
  border-radius: 8px;
}

.hash:active {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.15),
      rgba(29, 48, 104, 0.15)
    ),
    #f8f8ff;
  border-radius: 8px;
}

.outer img,
.outer svg {
  vertical-align: middle;
  margin-right: 6px;
}

.shareView .view {
  margin: auto 0;
}

.shareView .share .current {
  margin-left: 30px;
  padding: 10px 18px;
}

.shareView {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #a9aabc;
}

.share {
  cursor: pointer;
  position: relative;
  margin: auto 0;
  user-select: none;
}

.share .current:hover {
  color: #1d3068;
  background: rgba(115, 124, 152, 0.1);
  border-radius: 8px;
}

.share .current:hover svg path {
  stroke: #1d3068;
}

.share .current:active {
  background: rgba(115, 124, 152, 0.2);
  border-radius: 8px;
}

.share .links {
  position: absolute;
  top: 33px;
  right: 0;
  background: #ffffff;
  border: 1px solid #d5ddf3;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  border-radius: 8px;
  padding: 10px;
  width: max-content;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #1d3068;
  z-index: 999;
}

.links .link {
  padding: 7px 10px;
  border-radius: 8px;
  display: flex;
}

.links .link .img {
  margin-right: 7px;
  width: 13px;
  text-align: center;
}

.links .link .img img {
  vertical-align: middle;
}

.link + .link {
  margin-top: 5px;
}

.link:hover {
  background: rgba(115, 124, 152, 0.1);
}

.link:active {
  background: rgba(115, 124, 152, 0.2);
}

.current svg {
  margin-bottom: 3px;
}
</style>
