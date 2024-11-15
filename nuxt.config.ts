// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["~/assets/css/style.css"],
    modules: ["@nuxt/icon", "@nuxtjs/i18n"]
});