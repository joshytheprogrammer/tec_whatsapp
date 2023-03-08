<template>
  <div class="products-list">
    {{ item }}
  </div>
</template>

<script setup>
const props = defineProps(['item']);
const item = props.item;


</script>

<style lang="scss" scoped>
.products-list {
  background: $light;
}
</style>