export default defineNuxtConfig({
  // My Nuxt config
  head: {
    title: 'fullstack-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  
  css: ["/assets/style/style.css"],

  modules: [
    '@pinia/nuxt',
  ],
  routes: { '/': { prerender: true }, '/*': { cors: true } },
  
})