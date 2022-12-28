// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // vite: {
  //   vue: {
  //     reactivityTransform: true
  //   }
  // },
  app: {
    head: {
      // charset: 'utf-16',
      // viewport: 'width=500, initial-scale=1',
      title: 'Twitter Clone',
      link: [
        { rel: 'icon', type: 'image/png', href: './logo.png' },
      ],
      meta: [
        { name: 'description', content: 'Twitter Clone - Social Media' },
        { name: 'author', content: 'Diego Pérez' },
        { name: 'dev', content: 'dforce2055 dperez2055@gmail.com' },
        { name: 'keywords', content: 'javascript, typescript, nuxt, vue, node, tailwindcss, SSR, Prisma, Cloudinary' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    // pageTransition: {
    //   name: 'fade',
    //   mode: 'out-in' // default
    // },
    // layoutTransition: {
    //   name: 'slide',
    //   mode: 'out-in' // default
    // }
  },
  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
  },
  // DOCS: https://nuxt.com/docs/api/composables/use-runtime-config
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: process.env.NUXT_API_SECRET || '123',
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || '@',
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || '@',
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || '@',
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || '@',
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || '@',

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      defaultLocale: process.env.NUXT_DEFAULT_LOCALE || 'en'
    }
  },

  // https://nuxt.com/modules/tailwindcss
  // https://v8.i18n.nuxtjs.org/getting-started/setup
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  plugins: [
    // https://seb-l.github.io/pinia-plugin-persist/#vue3
    '~/plugins/pinia-plugin-persist.client',
    // '~/plugins/test',
  ],

  i18n: {
    baseUrl: '',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        name: 'Español',
        code: 'es',
        iso: 'es-ES',
        file: 'es-ES.json'
      },
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json'
      }
    ], // used in URL path prefix
    lazy: false, // TRUE Read this => https://i18n.nuxtjs.org/lazy-load-translations/
    langDir: 'lang',
    defaultLocale: process.env.DEFAULT_LOCALE || 'en',
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    // vueI18n: {
    //   legacy: false,
    //   locale: 'en',
    //   messages: {
    //     en: {
    //       welcome: 'Welcome'
    //     },
    //     fr: {
    //       welcome: 'Bienvenue'
    //     }
    //   }
    // }
  },
})
