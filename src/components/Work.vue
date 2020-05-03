<template>
  <a :href="work.link" class="work" target="_blank">
    <img :src="image" alt="" class="work__image" />
    <div class="work__info">
      <div class="work__type">{{ work.type }}</div>
      <div class="work__title">{{ work.title }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Work",
  props: {
    work: {
      required: true
    }
  },
  computed: {
    image() {
      return `thumbs/${this.work.img}`;
    }
  }
};
</script>

<style scoped lang="scss">
.work {
  position: relative;
  overflow: hidden;
  display: inline-flex;

  &::before {
    background: #0181f5;
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 70%;
    padding-bottom: 70%;
    opacity: 0;
    left: -26%;
    bottom: -60%;
    transition: 0.3s;
    z-index: 100;

    @media screen and (max-width: 980px) {
      width: 80%;
      padding-bottom: 80%;
    }

    @media screen and (max-width: 576px) {
      width: 90%;
      padding-bottom: 90%;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
    transition: 0.3s;
  }

  &__info {
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 60px;
    padding-left: 40px;
    z-index: 101;
  }

  &__type {
    display: block;
    font-size: 16px;
    color: #b3d9fc;
    font-weight: 400;
    font-family: alata, sans-serif;
    margin-bottom: 13px;
    position: relative;
    transform: translateX(-10%);
    transition: 0.3s;
    opacity: 0;
  }

  &__title {
    font-size: 30px;
    color: #fff;
    transform: translateX(10%);
    transition: 0.3s;
    opacity: 0;
  }

  &:hover {
    .work__type {
      transform: translateX(0);
      opacity: 1;
    }

    .work__title {
      transform: translateX(0);
      opacity: 1;
    }

    img {
      transform: scale(1);
    }

    &::before {
      opacity: 1;
      left: -15%;
      bottom: -40%;
    }
  }
}
</style>
