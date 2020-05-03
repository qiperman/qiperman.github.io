<template>
  <div id="app">
    <main class="page-wrapper">
      <the-header />
      <page-title />

      <section class="works">
        <work v-for="(work, index) in WORKS" :key="index" :work="work" />
      </section>
    </main>
  </div>
</template>

<script>
import Work from "./components/Work.vue";
import TheHeader from "./components/TheHeader";
import PageTitle from "./components/PageTitle";
import WORKS from "@public/works.json";

export default {
  name: "App",
  components: {
    Work,
    TheHeader,
    PageTitle
  },
  data() {
    return {
      WORKS: WORKS
    };
  }
};
</script>

<style lang="scss">
@import "~normalize.css";

*,
*::after,
*::before {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

@import url("https://fonts.googleapis.com/css2?family=Alata&display=swap");

html {
  font-size: 18px;
  line-height: 1.2;
}

body {
  font-family: "Alata", sans-serif;
  font-size: 1rem;
}

h1 {
  margin: 0;
  padding: 0;
  font-size: 4rem;
}

.wrapper {
  padding: 0 15px;
  margin: 0 auto;
}

.works {
  display: flex;
  flex-wrap: wrap;

  .work {
    flex: 0 0 33.333%;

    @media screen and (max-width: 980px) {
      flex: 0 0 50%;
    }

    @media screen and (max-width: 576px) {
      flex: 0 0 100%;
    }
  }
}
</style>
