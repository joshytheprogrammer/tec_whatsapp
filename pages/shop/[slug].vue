<template>
  <div class="product">
    <AppLoader v-if="pending" />
    <AppNetworkError v-else-if="error" :message="error" />
    <ShopItem :item="product" />
  </div>
</template>

<script setup>
const route = useRoute();

const { data: product, pending, error } = await useFetch('/api/products/'+route.params.slug );
</script>
