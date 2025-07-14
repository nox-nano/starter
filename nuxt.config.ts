import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./assets/app.css"],
})
