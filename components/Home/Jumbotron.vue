<template>
  <section class="hero">
    <img src="" alt="TEC Whatsapp Banner " id="banner_ad_image">
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hero {
  margin: 1rem 3rem 0 3rem;

  #banner_ad_image {
    width: 100%;
    height: 300px;
    object-fit: fill;
    border-radius: $standard-r;
  }

  @media screen and (max-width: $medium) {
    margin: 12px 14px 0 14px;

    #banner_ad_image {
      height: 200px;
    }
  }
}
</style>