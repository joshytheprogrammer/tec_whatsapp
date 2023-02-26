<template>
  <div class="popular" id="categories">
    <AppHeaders>
      <template #title>Popular Categories</template>
    </AppHeaders>
    <!-- <AppLoader v-if="$fetchState.pending" />
    <AppNetworkError v-else-if="$fetchState.error || error" :message="error" /> -->
    <!-- Don't forget to add v-else -->
    <div class="categories">
      <AppCardsCategory v-for="item in categories" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script setup>
let error = 'An error occurred'
let categories = [
  {
    id: 0,
    name: "Chocolate cake",
    thumbnail: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    slug: "#chocolate-cake"
  },
  {
    id: 1,
    name: "Birthday Cakes",
    thumbnail: "https://images.unsplash.com/photo-1571622840901-92ae138bd36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    slug: "#birthday-cakes"
  },
  {
    id: 2,
    name: "Wedding Cakes",
    thumbnail: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    slug: "#wedding-cakes"
  }
];


</script>

<style lang="scss" scoped>
.popular {
  background: $light;
  margin-bottom: 2rem;

  .categories {
    padding: 2rem 12px;
    display: flex;
    overflow: auto;
  }
}
</style>