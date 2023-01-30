<template>
  <div class="header-container">
    <div class="header">
      <a href="https://t.me/WordleUzBot" target="_blank">
        <div class="ad">
          <img src="../assets/appHeader/ad.png" alt="reklama" />
        </div>
      </a>
      <div class="navbar">
        <div class="search">
          <router-link to="/">
            <img src="../assets/logo.png" alt="logo" class="logo" />
          </router-link>
          <span class="search-area">
            <input
              type="text"
              placeholder="Сайт бўйлаб қидирув..."
              v-model="searchWord"
              @blur="searchResult = false"
              @focus="searchResult = true"
            />
            <div class="clear" @click="searchWord = null">
              <img
                src="../assets/appHeader/search-clear.svg"
                alt="clear"
                v-if="searchWord"
              />
            </div>
            <div class="results" v-if="searchResult">
              <div class="result" v-for="item in results" :key="item.key">
                <div class="result-image">
                  <img
                    :src="require('../assets/appHeader/' + item.img)"
                    alt="image"
                  />
                </div>
                <div class="result-info">
                  <h3 class="result-title">{{ item.title }}</h3>
                  <div class="result-day">
                    <div
                      class="result-theme"
                      :class="'theme' + item.themeColor"
                    >
                      {{ item.theme }}
                    </div>
                    <div class="result-date">{{ item.date }} олдин</div>
                  </div>
                </div>
              </div>
              <div class="result search-all" v-if="searchWord">
                <span class="search-all-img">
                  <img src="../assets/appHeader/search-result.svg" alt="icon" />
                </span>
                <h3 class="search-results">Қидирув натижаларига ўтиш</h3>
              </div>
            </div>
          </span>
          <a href="https://t.me/WordleUzBot" target="_blank" class="tg-button">
            <button>
              <img src="../assets/tg.svg" alt="telegram icon" />
              @platinauzb
            </button>
          </a>
          <div class="lang" @click="lang = !lang">
            <div class="curr-val">
              <span>{{ languages[currLang] }}</span>
              <img
                src="../assets/appHeader/arrow-lang.svg"
                :class="lang && 'down'"
              />
            </div>
            <div class="options" v-if="lang">
              <div
                class="opt"
                v-for="(lang, index) in languages"
                :key="index"
                @click="changeLang(index)"
                :class="index == currLang && 'active'"
              >
                {{ lang }}
              </div>
            </div>
          </div>
        </div>
        <div class="navs">
          <div class="links">
            <div
              class="nav-item"
              v-for="(theme, index) in themes"
              :key="index"
              :class="'nav' + index"
            >
              {{ theme }}
            </div>
          </div>
          <div class="forecast">
            <div class="weather" @click="weat = !weat">
              <div class="curr-weat">
                <img
                  :src="require('../assets/appHeader/' + currWeat.sky)"
                  alt="sun"
                />
                <span> {{ currWeat.deg }} °C </span>
              </div>
              <div class="days" v-if="weat">
                <div class="day" v-for="day in weatDays" :key="day.key">
                  <div class="date">{{ day.date }}</div>
                  <div class="week">{{ day.week }}</div>
                  <div class="sky">
                    <img
                      :src="require('../assets/appHeader/' + day.sky)"
                      alt=""
                    />
                  </div>
                  <div class="deg">{{ day.deg }}</div>
                </div>
              </div>
            </div>
            <div class="exchange" @click="exch = !exch">
              <div class="curr-exch">
                <img
                  :src="
                    require('../assets/appHeader/' + exchanges[currExch].flag)
                  "
                  alt="USA"
                  class="flag"
                />
                {{ exchanges[currExch].currency }}
                <span
                  :class="
                    exchanges[currExch].rate == 'increase.svg' ? 'inc' : 'dec'
                  "
                >
                  {{ exchanges[currExch].text }}</span
                >
                <img
                  :src="
                    require('../assets/appHeader/' + exchanges[currExch].rate)
                  "
                  alt="decreasing"
                  class="rate"
                />
              </div>
              <div class="options" v-if="exch">
                <div
                  class="opt"
                  v-for="(exchange, index) in exchanges"
                  :key="index"
                  @click="changeExch(index)"
                  :class="index == currExch && 'active'"
                  v-show="index !== currExch"
                >
                  <img
                    :src="require('../assets/appHeader/' + exchange.flag)"
                    alt="USA"
                    class="flag"
                  />
                  {{ exchange.currency }}
                  <span
                    :class="exchange.rate == 'increase.svg' ? 'inc' : 'dec'"
                  >
                    {{ exchange.text }}</span
                  >
                  <img
                    :src="require('../assets/appHeader/' + exchange.rate)"
                    alt="decreasing"
                    class="rate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: false,
      currLang: 0,
      languages: ["Ўзбекча", "O’zbekcha", "Русский", "English"],
      themes: ["Ўзбекистон", "Жаҳон", "Жамият", "Таҳлил", "Спорт", "Медиа"],
      exchanges: [
        {
          flag: "us-flag.svg",
          rate: "decrease.svg",
          currency: "USD",
          text: "11318.74",
        },
        {
          flag: "eu-flag.svg",
          rate: "increase.svg",
          currency: "EUR",
          text: "12242.35",
        },
        {
          flag: "ru-flag.svg",
          rate: "decrease.svg",
          currency: "RUB",
          text: "169.94",
        },
      ],
      weatDays: [
        {
          date: "16 янв",
          week: "Кеча",
          sky: "sun.svg",
          deg: "-7°  -18° ",
        },
        {
          date: "17 янв",
          week: "Бугун",
          sky: "sun.svg",
          deg: "-3°  -12° ",
        },
        {
          date: "18 янв",
          week: "Эртага",
          sky: "sun.svg",
          deg: "-1°  -10° ",
        },
        {
          date: "19 янв",
          week: "Пайшанба",
          sky: "sun.svg",
          deg: "-1°  -9° ",
        },
        {
          date: "20 янв",
          week: "Жума",
          sky: "cloud.svg",
          deg: "-2°  -9° ",
        },
        {
          date: "21 янв",
          week: "Шанба",
          sky: "cloud.svg",
          deg: "-2°  -8° ",
        },
      ],
      exch: false,
      currExch: 0,
      weat: false,
      currWeat: {
        deg: "+9",
        sky: "sun.svg",
      },
      searchResult: false,
      searchWord: null,
      results: [
        {
          img: "search-1.png",
          title:
            "Кечадан ўқиш бошланган мактабларда иссиқлик талабга жавоб берадими?",
          theme: "Жамият",
          themeColor: "3",
          date: "5 кун",
        },
        {
          img: "search-2.png",
          title: "Бухорода ўқишнинг бошланиши яна 16 январга қолдирилди",
          theme: "Жамият",
          themeColor: "3",
          date: "5 кун",
        },
        {
          img: "search-3.png",
          title:
            "Қашқадарёда ҳам расман эртага (11 январ) ўқишлар босқичма-босқич бошланади",
          theme: "Жамият",
          themeColor: "3",
          date: "7 кун",
        },
        {
          img: "search-4.png",
          title:
            "Мактабгача ва мактаб таълими муассасаларида ўқиш жараёнларини кейинги ҳафтадан бошлаш...",
          theme: "Жамият",
          themeColor: "3",
          date: "7 кун",
        },
        {
          img: "search-5.png",
          title:
            "Қанча ўзбекистонлик талабалар ўқиш учун бошқа давлатларга кетишган?",
          theme: "Ўзбекистон",
          themeColor: "1",
          date: "7 кун",
        },
        {
          img: "search-6.png",
          title:
            "Аллақачон ўқиш манзилларига келган талабаларнинг турар-жой масаласи нима бўлади?",
          theme: "Жамият",
          themeColor: "3",
          date: "6 кун",
        },
      ],
    };
  },
  methods: {
    changeLang(index) {
      this.currLang = index;
    },
    changeExch(index) {
      this.currExch = index;
    },
  },
};
</script>

<style scoped>
.header-container {
  background: #ffffff;
  border-bottom: 1px solid #d5ddf3;
  padding: 15px 0 8px;
  margin-bottom: 30px;
}

.header {
  max-width: 1300px;
  margin: 0 auto;
}

.ad {
  margin: 1px 0 30px;
}

.search {
  margin-bottom: 14px;
  display: flex;
}

.logo {
  vertical-align: middle;
  margin-right: 20px;
  width: 168px;
  cursor: pointer;
}

.logo:hover {
  opacity: 0.7;
}

.search input {
  padding: 0 20px 0 54px;
  border-radius: 8px;
  width: 701px;
  height: 48px;
  border: none;
  background: #f8f8ff url("../assets/appHeader/search.svg") no-repeat 23px;
  cursor: pointer;
  outline: none;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
}

.search input:hover {
  background: url("../assets/appHeader/search.svg") no-repeat 23px,
    linear-gradient(0deg, rgba(29, 48, 104, 0.05), rgba(29, 48, 104, 0.05));
}

.search input::placeholder {
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #737c98;
}

.search input:focus {
  border: 2px solid #0066cc;
  border-radius: 8px;
}

.search input:focus {
  background: #f8f8ff url("../assets/appHeader/search-hover.svg") no-repeat 23px;
}

.search input:focus:hover {
  box-shadow: 0px 0px 0px 3px rgba(1, 138, 216, 0.2);
}

span.search-area {
  position: relative;
}

.result.search-all .search-all-img {
  width: 36px;
  height: 36px;
  margin-right: 10px;
}

.result.search-all .search-all-img img {
  padding: 5px;
}

.result .search-results {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1d3068;
  margin: auto 0;
}

.clear {
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 5px 9px;
  cursor: pointer;
}

.clear:hover {
  background: rgba(115, 124, 152, 0.1);
  border-radius: 8px;
}

.clear:active {
  background: rgba(115, 124, 152, 0.2);
  border-radius: 8px;
}

.clear img {
  width: 10px;
  height: 10px;
}

.results {
  position: absolute;
  z-index: 3;
  background: #ffffff;
  border: 1px solid #d5ddf3;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  border-radius: 8px;
  padding: 10px;
  margin-top: 5px;
  width: -webkit-fill-available;
}

.result {
  padding: 7px 10px;
  display: flex;
  cursor: pointer;
}

.result + .result {
  margin-top: 10px;
}

.result-title {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1d3068;
  margin-bottom: 5px;
}

.result-day {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
}

.result-date {
  color: #a9aabc;
  margin-left: 10px;
}

.result-image {
  margin-right: 10px;
  width: 36px;
  height: 36px;
}

.result:hover {
  background: rgba(115, 124, 152, 0.1);
  border-radius: 8px;
}

.result:active {
  background: rgba(115, 124, 152, 0.2);
  border-radius: 8px;
}

.tg-button button {
  background: #34aadf;
  border-radius: 8px;
  border: none;
  margin: 0 20px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  height: 48px;
  width: 161px;
  cursor: pointer;
}

.tg-button button:hover {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.1),
      rgba(29, 48, 104, 0.1)
    ),
    #34aadf;
}

.tg-button button:active {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.3),
      rgba(29, 48, 104, 0.3)
    ),
    #34aadf;
}

.tg-button button img {
  vertical-align: middle;
  margin-right: 8px;
}

.lang {
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
  width: 136px;
  cursor: pointer;
  user-select: none;
}

.curr-val {
  padding: 14px 20px;
  background: #f8f8ff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
}

.curr-val:hover {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.05),
      rgba(29, 48, 104, 0.05)
    ),
    #f8f8ff;
}

.curr-val:active {
  background: linear-gradient(
      0deg,
      rgba(29, 48, 104, 0.15),
      rgba(29, 48, 104, 0.15)
    ),
    #f8f8ff;
}

.curr-val img {
  transition: all 0.3s ease;
}

.curr-val img.down {
  rotate: -180deg;
}

.options {
  position: absolute;
  background: #ffffff;
  border: 1px solid #d5ddf3;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  border-radius: 8px;
  padding: 10px;
  width: 116px;
  margin-top: 5px;
  z-index: 9999;
}

.opt {
  padding: 7px 10px;
}

.opt:hover {
  background: rgba(115, 124, 152, 0.1);
  border-radius: 8px;
}

.opt.active {
  background: #f8f8ff;
  border-radius: 8px;
  color: #1d3068;
  font-weight: 700;
}

.opt + .opt {
  margin-top: 5px;
}

.navs {
  display: flex;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: #1d3068;
}

.links {
  display: flex;
  margin: auto auto auto 0;
}

.nav-item {
  cursor: pointer;
}

.nav-item + .nav-item {
  margin-left: 40px;
}

.nav-item.nav0:hover {
  color: #2da85b;
}

.nav-item.nav1:hover {
  color: #003096;
}

.nav-item.nav2:hover {
  color: #ff7d25;
}

.nav-item.nav3:hover {
  color: #00aead;
}

.nav-item.nav4:hover {
  color: #e50029;
}

.nav-item.nav5:hover {
  color: #018ad8;
}

.forecast {
  display: flex;
}

.weather {
  margin-right: 20px;
  padding: 14px 20px;
  cursor: pointer;
  position: relative;
  user-select: none;
}

.weather img {
  margin-right: 5px;
}

.forecast div img {
  vertical-align: middle;
  margin-bottom: 1px;
}

.flag {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-bottom: 2px;
}

.rate {
  margin-bottom: 5px;
  margin-left: 3px;
}

.exchange {
  padding: 14px 20px;
  cursor: pointer;
  margin: auto 0;
}

.weather:hover,
.exchange:hover {
  background: rgba(115, 124, 152, 0.1);
  border-radius: 8px;
}

.weather:active,
.exchange:active {
  background: rgba(115, 124, 152, 0.2);
  border-radius: 8px;
}

.exchange .options {
  width: auto;
  margin-left: -22px;
  margin-top: 19px;
}

span.inc {
  color: #2da85b;
}

span.dec {
  color: #e50029;
}

.days {
  position: absolute;
  top: 56px;
  right: 0;
  background: #ffffff;
  padding: 12px 20px;
  border: 1px solid #d5ddf3;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  text-align: center;
}

.day .date {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #a9aabc;
  margin-bottom: 1px;
}

.day .week,
.day .deg {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1d3068;
  flex-wrap: nowrap;
}

.day .sky {
  margin: 4px auto;
  width: 40px;
  height: 40px;
}

.day {
  width: max-content;
}

.day + .day {
  margin-left: 30px;
}

.curr-weat img {
  width: 25px;
  height: 25px;
}

.curr-weat span {
  vertical-align: middle;
}
</style>
