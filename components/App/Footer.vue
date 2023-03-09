<template>
  <div class="footer">
    <p>Copyright © TEC 2023. All rights reserved.</p>
    <p>This website was designed and built by <a href="https://joshytheprogrammer.com" target="_blank">joshytheprogrammer</a></p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  bottom: 0;
  padding: 1rem;
  text-align: center;
  background: $primary;
  color: $light;

  p a {
    color: $light;
  }
}
</style>