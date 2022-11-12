export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      title: 'fullstack-nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    
  
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["/assets/style/style.css"],
  
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],
  
    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,
  
    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
      // https://go.nuxtjs.dev/eslint
    ],
  
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
      '@pinia/nuxt',
      // {
      //   autoImports: [
      //     // automatically imports `defineStore`
      //     'defineStore', // import { defineStore } from 'pinia'
      //     // automatically imports `defineStore` as `definePiniaStore`
      //     ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      //   ],
      // },
    ],
  
  
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    serverMiddleware: [
    //   '~/api/index.ts',
    //   '~/api/getProfil.ts',
    //   '~/api/postProfil.ts'
    ]
  }