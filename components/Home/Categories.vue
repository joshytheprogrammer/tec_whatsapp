<template>
  <div class="popular" id="categories">
    <AppHeaders>
      <template #title>Popular Categories</template>
    </AppHeaders>
  </div>
</template>

<script setup>

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