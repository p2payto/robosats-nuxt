export default defineNuxtConfig({
  modules: [
    './module/module.js'
  ],
  runtimeConfig: {
    public: {
      ...(process.env.NUXT_ROBOSATS_COORDINATOR_URL && {
        robosatsCoordinatorUrl: process.env.NUXT_ROBOSATS_COORDINATOR_URL
      }),
      ...(process.env.NUXT_TOR_SOCKS_URL && {
        torSocksUrl: process.env.NUXT_TOR_SOCKS_URL
      })
    }
  }
})
