<template>
  <div class="recommended" id="recommended">
    <AppHeaders>
      <template #title>Recommended this season</template>
    </AppHeaders>
    <AppLoader v-if="pending"/>
    <AppNetworkError v-else-if="error || error" :message="error" />
    <div v-else class="products">
      <AppCardsProduct v-for="item in products" :key="item.id" :item="item" />
      <AppCardsProduct v-for="item in products" :key="item.id" :item="item" />
      <AppCardsProduct v-for="item in products" :key="item.id" :item="item" />
      <AppCardsProduct v-for="item in products" :key="item.id" :item="item" />
      <AppCardsProduct v-for="item in products" :key="item.id" :item="item" />
      <AppCardsProduct v-for="item in products" :key="item.id" :item="item" />
      <AppCardsProduct v-for="item in products" :key="item.id" :item="item" />
      <AppCardsProduct v-for="item in products" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
const { data: products, pending, error } = await useFetch('/api/products/popular');
</script>

<style lang="scss" scoped>
.recommended {
  background: $light;
  margin-bottom: 1rem;

  .products {
    padding: 12px 48px;

    display: grid;
    gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(5,1fr);

    @media screen and (max-width: $large) {
      width: 100%;
      margin: 0;
      padding: 0.9rem;
      grid-template-columns: repeat(4,1fr);
    }

    @media screen and (max-width: $m-large) {
      grid-template-columns: repeat(3,1fr);
    }

    @media screen and (max-width: $medium) {
      grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: $s-medium) {
      display: block;
    }
  }
}
</style>