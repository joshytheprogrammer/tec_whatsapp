<template>
  <div class="item">
    <img :src="product.thumbnail" :alt="'thumbnail - ' + product.slug">
    <div class="_details">

    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['product']);
  const product = props.product;

  console.log(product.thumbnai)
</script>

<style lang="scss" scoped>
.item {

}
</style>