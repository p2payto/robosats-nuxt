import { defineNuxtModule, addImportsDir, createResolver, installModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@p2payto/robosats-nuxt',
    configKey: 'robosatsNuxt'
  },

  defaults: {
    includeDemoPage: false
  },

  setup: async (options, nuxt) => {
    const resolver = createResolver(import.meta.url)

    addImportsDir(resolver.resolve('../runtime/composables'))

    // This actually installs the module (server handlers included)
    await installModule('@p2payto/robosats-nitro')

    if (options.includeDemoPage) {
      nuxt.hook('pages:extend', (pages) => {
        pages.push({
          name: 'robosats-nuxt-demo',
          path: '/',
          file: resolver.resolve('../pages/index.vue')
        })
      })
    }
  }
})
