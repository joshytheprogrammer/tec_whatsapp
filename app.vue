<template>
  <div class="app">
    <AppNav />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useMobileStore } from '@/store/mobile'

const device = useMobileStore()

// Call the checkWidth ACTION
device.checkWidth()

// Recall that checkWidth action on resize
onMounted(() => {
  if(process.client) {
    window.addEventListener("resize", device.checkWidth)
  }
});

onUnmounted(() => {
  if(process.client) {
    window.removeEventListener("resize", device.checkWidth)
  }
});

</script>