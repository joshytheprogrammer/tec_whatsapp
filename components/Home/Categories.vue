<template>
  <div class="popular" id="categories">
    <AppHeaders>
      <template #title>Popular Categories</template>
    </AppHeaders>
    <AppLoader v-if="pending" />
    <AppNetworkError v-else-if="error" :message="error" />
    <!-- Don't forget to add v-else -->
    <div v-else class="categories">
      <AppCardsCategory v-for="item in categories" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
const { data: categories, pending, error } = await useFetch('/api/categories');

</script>

<style lang="scss" scoped>
.popular {
  background: $light;
  margin-bottom: 2rem;

  .categories {
    padding: 12px 48px;
    display: flex;
    overflow: auto;
  }

  @media screen and (max-width: $medium) {
    .categories {
      padding: 12px 14px;
    }
  }
}
</style>