<template>
  <div class="item">
    <img :src="product.thumbnail" :alt="'thumbnail - ' + product.slug">
    <div class="_details">
      <div class="_default">
        <h1> {{product.name}} </h1>
        <p :title="product.name + ' costs ' + product.price">{{formatter(product.price)}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['product']);
const product = props.product[0];

function formatter(price) {
  let currency = '₦'

  let formatter = new Intl.NumberFormat('en-US');

  price = currency + formatter.format(price)

  return price
}
</script>

<style lang="scss" scoped>
.item {

}
</style>