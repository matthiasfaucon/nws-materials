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
  vite: {
    server: {
      proxy: {
        '/users': { 
          target: 'http://vps-a47222b1.vps.ovh.net:4242/Student',
          headers: { "Access-Control-Allow-Headers": '*',
          "Access-Control-Expose-Headers": '*'},
          changeOrigin: true 
        }
      }
    },
  },
  
})