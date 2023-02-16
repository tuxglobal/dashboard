// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            addressbook: process.env.ADDRESSBOOK,
        },
    },
    modules: [
        '@nuxt/content',
        '@pinia/nuxt',
    ],
    pinia: {
        autoImports: [
            'defineStore',
            ['defineStore', 'definePiniaStore'],
        ],
    },
    ssr: false,
    css: ['~/assets/css/main.scss'],
});
