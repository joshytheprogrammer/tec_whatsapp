<template>
  <section class="hero">
    <img src="https://firebasestorage.googleapis.com/v0/b/tec-whatsapp.appspot.com/o/Banners%2FFirst%20TEC%20banner%20-%20Desktop.png?alt=media&token=7a23e4b5-47e5-4760-a021-9e15b06bd98e" alt="TEC Whatsapp Banner " id="banner_ad_image">
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;

  margin: 1rem 3rem 0 3rem;

  transition: all .3s ease-in-out;

  #banner_ad_image {
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: $standard-r;
  }

  @media screen and (max-width: $medium) {
    margin: 12px 14px 0 14px;

    #banner_ad_image {
      max-height: 200px;
    }
  }
}
</style>