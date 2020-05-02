<template>
  <section class="page-title">
    <div class="wrapper">
      <h1 class="page-title__text">Мои работы</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageTitle"
};
</script>

<style scoped lang="scss">
.page-title {
  color: #fff;
  background: #040e27;
  padding: 100px 0 140px;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    text-align: center;
    @media screen and (max-width: 567px) {
      font-size: 3rem;
    }
  }
}
</style>
