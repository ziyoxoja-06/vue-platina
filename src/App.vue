<template>
  <app-header></app-header>
  <div class="container">
    <app-main></app-main>
  </div>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppMain from "./pages/AppMain.vue";
// some
export default {
  components: {
    AppHeader,
    AppFooter,
    AppMain,
  },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  font-family: "SF Pro Display";
}

body {
  background: #f5f5f5;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("./fonts/SFPRODISPLAYREGULAR.OTF");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("./fonts/SFPRODISPLAYMEDIUM.OTF");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "SF Pro Display";
  src: url("./fonts/SFPRODISPLAYBOLD.OTF");
  font-weight: 700;
  font-style: normal;
}
</style>
