import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', '/contact', '/experience', '/projects'],
    },
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  modules: [
      '@nuxtjs/tailwindcss',
      'shadcn-nuxt'
  ],

    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: '@/components/ui'
    },

  css: ['~/assets/css/main.css' ],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

  compatibilityDate: '2024-04-03',

  devtools: { enabled: true }
})