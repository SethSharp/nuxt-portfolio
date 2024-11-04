// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', 'error', 'contact', 'experience', 'projects'],
    },
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  modules: ['@nuxtjs/tailwindcss'],

  css: [
      '~/assets/css/main.css'
  ],

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true }
})