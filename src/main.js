import { createApp } from 'vue'

import router from './router.js'
import App from './App.vue'

import TheArticles from './components/TheArticles.vue'
import NewsSlide from './components/NewsSlide.vue'

const app = createApp(App)

app
    .component('TheArticles', TheArticles)
    .component('NewsSlide', NewsSlide)

app.use(router)

app.mount('#app')

