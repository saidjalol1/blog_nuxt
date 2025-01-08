import { Meta } from "#build/components";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@stefanobartoletti/nuxt-social-share'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  socialShare: {
    baseUrl: 'https://www.muvaffaqiyatsirlari.uz/' // required!
    // other optional module options
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://back-end.muvaffaqiyatsirlari.uz'
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My Web App', // Default title for the website
      htmlAttrs: {
        lang: 'en', // Adds <html lang="en">
      },
      meta: [
        {
          name: 'description',
          content: 'This is my web application built with Nuxt.js.', // Meta description
        },
        {
          name: 'keywords',
          content: 'web, app, nuxt, javascript, tailwindcss', // Keywords for SEO
        },
        {
          property: 'og:title',
          content: 'My Web App', // Open Graph title for social sharing
        },
        {
          property: 'og:description',
          content: 'This is my web application built with Nuxt.js.', // Open Graph description
        },
        {
          property: 'og:type',
          content: 'website', // Open Graph type
        },
      ],
    },
  },
});
