<template>
  <div>
    <QRCode 
      :width="200"
      :height="200"
      value="https://scholtz.sk"
    />
  </div>
</template>

<script>
import QRCode from "qrcode-vue3";
export default {
  components: {
    QRCode
  }
}
</script>

<style lang="scss" scoped>

</style>