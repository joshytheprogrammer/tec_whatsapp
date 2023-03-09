<template>
  <div class="app">
    <AppNav />
    <NuxtLayout>
      <NuxtPage />
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