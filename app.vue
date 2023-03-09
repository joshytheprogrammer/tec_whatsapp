<template>
  <div class="app">
    <AppNav />
    <NuxtLayout>
      <NuxtPage class="body" />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>

<script setup>
import { useMobileStore } from '@/store/mobile'

const device = useMobileStore()

// Call the checkWidth ACTION
device.checkWidth()

// let isMobile = ref(device.getDevice);

</script>

<style lang="scss">
.app {
  .body {
    min-height: 100vh;
  }
}
</style>