<template>
  <div class="category">
    <div class="s">
      <img loading="lazy" :src="item.thumbnail" :alt="'TEC product category - '+item.name">
      <div class="_details">
        <NuxtLink :to="'#' + item.slug">{{item.name}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['item']);
  const item = props.item;
</script>

<style lang="scss" scoped>
.category {
  padding: 1rem 0;

  .s {
    max-width: 220px;
    margin-right: 1rem;

    img {
      width: 200px;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
      transition: 0.5s all ease-in-out;
    }

    ._details {
      display: block;
      text-align: center;
      padding: 1rem 0.5rem;
      color: $primary;

      a {
        padding: 0.2rem 0;
        display: inherit;
        color: inherit;
        text-decoration: none;
        font-size: 21px;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
          text-decoration-color: $primary;
        }
      }

      span {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: $s-medium) {
    .s {
      img {
        width: 180px;
        height: 220px;
      }

      ._details {
        padding: 0.5rem;

        a {
          font-size: 18px;
          font-weight: 500;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
