<template>
  <div class="product">
    <div class="s">
      <img loading="lazy" :src="item.thumbnail" :alt="item.name">
      <div class="_details">
        <NuxtLink :to="'/shop/'+item.slug" :aria-label="item.name" :title="item.name">{{item.name}}</NuxtLink>
        <span class="prices"> {{formatter(item.price)}} </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['item']);
const item = props.item;

function formatter(price) {

  let currency = '₦'

  let formatter = new Intl.NumberFormat('en-US');

  price = currency + formatter.format(price)

  return price
}
</script>

<style lang="scss" scoped>
.product {
  padding: 1rem 0;

  .s {
    img {
      width: 100%;
      max-height: 100%;

      height: 300px;
      object-fit: contain;
      border-radius: 10px;
      transition: 0.5s all ease-in-out;
    }

    ._details {
      display: block;
      padding: 1rem 0.5rem;
      color: $primary;

      a {
        white-space: pre-line;
        overflow: hidden;
        height: fit-content;
        text-overflow: ellipsis;
        padding: 0.2rem 0;
        text-transform: capitalize;
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
}
</style>