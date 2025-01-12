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
      
      title: 'Asosiy | IT, Shaxsiy Rivojlanish va Texnologiyalar',
      htmlAttrs: {
        lang: 'en', // Adds <html lang="en">
      },
      meta: [
        {
          name: 'description',
          content: 'Muvaffaqiyat sirlari, IT texnologiyalari, IT olamida muvaffaqiyatli karera qurish, Python va sun\'iy intellekt haqida qiziqarli va foydali kontent, shaxsiy rivojlanish',
        },
        {
          name: 'keywords',
          content: 'IT, Python, Sun\'iy intellekt, Shaxsiy rivojlanish, Texnologiyalar, IT Karera, Web dasturlash, O\'zbekcha kontent',
        },
        {
          property: 'og:title',
          content: 'Asosiy | IT, Shaxsiy Rivojlanish va Texnologiyalar',
        },
        {
          property: 'og:description',
          content: 'O\'zbek tilida muvaffaqiyat sirlari,IT texnologiyalari, va sun\'iy intellekt haqida qiziqarli maqolalar va yangiliklar. shaxsiy rivojlanish',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://www.muvaffaqiyatsirlari.uz/',
        },
        {
          property: 'og:image',
          content: 'https://back-end.muvaffaqiyatsirlari.uz/static/images/a80c3b7e-36e5-4f6e-96a4-884b3ceccb71.webp',
        },
        {
          name: 'author',
          content: 'G\'ayratjon Xoldarov, Turakhujayev Saidjalol',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico' // Path to your touch icon
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon.ico' // Path for Apple devices
        }
      ],
    },
  },
});
