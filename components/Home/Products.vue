<template>
  <div class="products-list">
    {{ item }}
    {{ products }}
  </div>
</template>

<script setup>
const props = defineProps(['item']);
const item = props.item;

const { data: products, pending, error } = await useFetch('/api/categories/products/'+item.id);

console.log(item)
</script>

<style lang="scss" scoped>
.products-list {
  background: $light;
}
</style>