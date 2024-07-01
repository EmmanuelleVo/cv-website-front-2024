// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: false },

	sanity: {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
	},

  modules: [
    '@nuxtjs/sanity',
    '@nuxtjs/google-fonts',
    'nuxt-swiper'
  ],
  googleFonts: {
    families: {
      Poppins: {
        wght: [200, 300, 400, 500, 600, 700, 800, 900],
      },
      Figtree: {
        wght: [200, 300, 400, 500, 600, 700],
      },
    },
    download: true, // Optional: to download fonts instead of using Google API
    inject: true // Optional: to inject the fonts into the head of your HTML
  },

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