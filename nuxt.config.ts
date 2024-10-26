// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', '/projects', '/experiences', '/contact'],
    },
  },

  generate: {
    routes: [
      '/projects',
    ]
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  modules: ['@nuxtjs/tailwindcss'],

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true }
})