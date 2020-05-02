<template>
  <header class="header">
    <div class="wrapper">
      <a href="/" class="header__logo">
        Portfolio
      </a>

      <div class="header__right">
        Viktor Matveev
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped lang="scss">
.header {
  background: #040e27;
  padding: 25px 0;
  color: #fff;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__right {
    white-space: nowrap;
    font-size: 1.2rem;
  }

  &__logo {
    font-size: 2rem;
    text-transform: uppercase;
  }
}
</style>
