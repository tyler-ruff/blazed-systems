// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
    vue: {
      compilerOptions: {
        isCustomElement: (tag) => ['UseFetchDemo'].includes(tag),
      },
    },
    components: {
      global: true,
      dirs: ['~/components'],
    },
    css: ["~/assets/css/base.css"],
  });
  