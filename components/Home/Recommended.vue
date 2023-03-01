<template>
  <div class="recommended" id="recommended">
    <AppHeaders>
      <template #title>Recommended this season</template>
    </AppHeaders>
    <AppLoader v-if="pending"/>
    <AppNetworkError v-else-if="error || error" :message="error" />
    <div v-else class="products">
      <!-- <Card v-for="item in recommended" :key="item.id" :item="item" /> -->
    </div>
  </div>
</template>

<script setup>
const { data: categories, pending, error } = await useFetch('/api/categories');
</script>

<style lang="scss" scoped>
.recommended {
  background: $light;
  margin-bottom: 2rem;

  .products {
    margin: 2rem;
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