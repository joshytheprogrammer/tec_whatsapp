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
  if(window) {
    window.addEventListener("resize", device.checkWidth)
  }
})

onUnmounted(() => {
  window.removeEventListener("resize")
})

</script>