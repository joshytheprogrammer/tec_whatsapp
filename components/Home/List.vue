<template>
  <div class="list">
    <section v-for="item in categories" :key="item.id" :id="item.id">
      <AppHeaders>
        <template #title> {{ item.name }} </template>
      </AppHeaders>
    </section>
  </div>
</template>

<script setup>
const { data: categories, pending, error } = await useFetch('/api/categories');

</script>

<style lang="scss" scoped>

</style>