<template>
  <section class="hero">
    <img src="https://firebasestorage.googleapis.com/v0/b/tec-whatsapp.appspot.com/o/Banners%2FFirst%20TEC%20banner%20-%20Desktop.png?alt=media&token=7a23e4b5-47e5-4760-a021-9e15b06bd98e" alt="TEC Whatsapp Banner " id="banner_ad_image">
  </section>
</template>

<script setup>
// import { useMobileStore } from '@/store/mobile'

// // Get device details from store
// const device = useMobileStore()

// let currentNo = 0

// // Will contain current banner
// let banner = ''

// // Contain array of all banners for that device
// let banners = []

// // Contains all banners for desktop
// let desktopBanners = [
//   "https://firebasestorage.googleapis.com/v0/b/tec-whatsapp.appspot.com/o/Banners%2FFirst%20TEC%20banner%20-%20Desktop.png?alt=media&token=7a23e4b5-47e5-4760-a021-9e15b06bd98e"
// ]

// // Contains all banners for mobile
// let mobileBanners = [
//   "https://firebasestorage.googleapis.com/v0/b/neas-fashion.appspot.com/o/Banner%2FNeas%20fashion%20banner%20ad%20-%20mobile.png?alt=media&token=d71b410b-06f3-49f4-8f2c-d93c1bf0734e"
// ]

// onMounted(() => {
//   device.getDevice ? banners = mobileBanners : banners = desktopBanners

//   banner = banners[0]

//   setInterval(() => {
//     doSlideShow()
//   }, 5000)
// });

// function doSlideShow() {
//   if(currentNo > (banners.length - 1)) { currentNo = 0 }

//   banner = banners[currentNo]

//   currentNo++
// }
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;

  margin: 1rem 3rem;

  transition: all .3s ease-in-out;

  #banner_ad_image {
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: $standard-r;
  }

  @media screen and (max-width: $medium) {
    margin: 12px 14px;

    #banner_ad_image {
      max-height: 200px;
    }
  }
}
</style>