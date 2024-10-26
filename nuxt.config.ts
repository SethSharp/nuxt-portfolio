// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true }
})
