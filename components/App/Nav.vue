<template>
  <nav>
    <h2>
      <NuxtLink class="logo" to="/">
        TEC <sup> <Icon name="logos:whatsapp-icon" size="0.7em" /> </sup>
      </NuxtLink>
    </h2>
    <div class="contact">
      <span>Need help?</span>
      <span><a href="tel:+2348062338622">08062338622</a></span>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
nav {
  padding: 12px 48px;
  top: 0;

  user-select: none;
  background: $primary;
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  // box-shadow: 0px 2px 4px $t-dark;
  // backdrop-filter: blur(2px);

  h2 {
    font: {
      size: 36px;
      weight: 600;
    }

    text-transform: capitalize;

    .logo {
      text-decoration: none;
      cursor: pointer;
      color: $light;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $light;

    span a {
      color: $light;
    }
  }

  @media screen and (max-width: $medium) {
    padding: 12px 14px;
    width: 100%;

    .logo {

      font: {
        size: 32px;
        weight: 500;
      }
    }

    .contact {
      span {
        font-size: 14px;

        a {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: $small) {
    .logo {

      font: {
        size: 24px;
        weight: 600;
      }
    }
  }
}
</style>