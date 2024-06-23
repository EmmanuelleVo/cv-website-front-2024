// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: false },

	sanity: {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
	},
  
  modules: [
    '@nuxtjs/sanity', 
    ['@nuxtjs/google-fonts', {
      families: {
        'Figtree': true,
        download: true,
        inject: true
      }
    }]
  ],

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/settings/_settings.colors.scss" as *;'
        }
      }
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

})