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

// or using an action instead
device.checkWidth()
</script>