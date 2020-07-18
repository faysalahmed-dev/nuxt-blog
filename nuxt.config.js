require('dotenv').config()

export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/main.css'],
  plugins: [
    '~/plugins/app',
    '~/plugins/chakra-ui',
    { src: '~/plugins/vue-unicons', mode: 'client' },
  ],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIRE_BASE_API_KEY,
          authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
          databaseURL: process.env.FIRE_BASE_DATABASE,
          projectId: process.env.FIRE_BASE_PROJECT_ID,
          storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIRE_BASE_MESSAGING,
          appId: process.env.FIRE_BASE_APP_ID,
          measurementId: process.env.FIRE_BASE_MEASUREMENT_ID,
        },
        services: {
          auth: {
            // persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
            },
            ssr: true,
          },
          firestore: true,
          storage: true,
        },
      },
    ],
  ],
  axios: {},
  loading: {
    color: '#3caa79',
    height: '4px',
    duration: 5000,
  },
  build: {
    analyze: process.env.NODE_ENV === 'development',
    devtools: process.env.NODE_ENV === 'development',
    optimizeCSS: true,
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
}
