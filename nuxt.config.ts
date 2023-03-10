// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {  shim: false  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/app.scss";',
        },
      },
    },
  },
  css: [
    '@/assets/main.css',
  ],
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
  ]
})