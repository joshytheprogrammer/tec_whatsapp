<template>
  <div class="list">
    <section v-for="item in categories" :key="item.id" :id="item.id">
      <AppHeaders>
        <template #title> {{ item.name }} </template>
      </AppHeaders>
      <HomeProducts :id="item.id" />
    </section>
  </div>
</template>

<script setup>
const { data: categories } = await useFetch('/api/categories');
</script>

<style lang="scss" scoped>
.list {
  display: block;
  
  section {
    margin-bottom: 1rem;
  }
}
</style>