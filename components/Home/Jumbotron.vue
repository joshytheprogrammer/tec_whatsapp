<template>
  <section class="hero">
    <img :src="banner" alt="TEC Whatsapp Banner " id="banner_ad_image">
  </section>
</template>

<script setup>
import { useMobileStore } from '@/store/mobile'

// Get device details from store
const device = useMobileStore()

let currentNo = 0

// Will contain current banner
let banner = ref('')

// Contain array of all banners for that device
let banners = []

// Contains all banners for desktop
let desktopBanners = [
  "https://firebasestorage.googleapis.com/v0/b/tec-whatsapp.appspot.com/o/Banners%2FFirst%20TEC%20banner%20-%20Desktop.png?alt=media&token=7a23e4b5-47e5-4760-a021-9e15b06bd98e"
]

// Contains all banners for mobile
let mobileBanners = [
  "https://firebasestorage.googleapis.com/v0/b/tec-whatsapp.appspot.com/o/Banners%2FFirst%20TEC%20Design%20-%20Mobile.png?alt=media&token=5b24a2d4-24a7-4028-abe7-f44a9417f13d",
]

onMounted(() => {
  device.getDevice ? banners = mobileBanners : banners = desktopBanners

  banner.value = banners[0]

  setInterval(() => {
    doSlideShow()
  }, 5000)
});

function doSlideShow() {
  if(currentNo > (banners.length - 1)) { currentNo = 0 }

  banner.value = banners[currentNo]

  currentNo++
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  background-color: $primary;
  display: flex;
  justify-content: center;

  #banner_ad_image {
    max-width: 100%;
    max-height: 300px;
    object-fit: cover;
    // border-radius: $standard-r;
    transition: all .3s ease-in-out;
  }

  @media screen and (max-width: $medium) {
    // margin: 12px 14px;
    // border-radius: $standard-r;

    #banner_ad_image {
      width: 100%;
      max-height: 200px;
      // object-fit: contain;
    }
  }
}
</style>