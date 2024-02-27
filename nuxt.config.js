// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/main.css', 'primevue/resources/themes/aura-light-green/theme.css'],
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    modules: ['@pinia/nuxt', 'nuxt-svgo', 'nuxt-primevue', ['@nuxtjs/google-fonts', {
        families: {
            Montserrat: {
                wght: [400, 500, 700, 900]
            }
        }
    }]],
    svgo: {
        autoImportPath: './assets/icons/',
        defaultImport: 'component'
    },
    pinia: {
        storesDirs: ['./store/**']
    },
    primevue: {
        components: {
            include: ['IconField', 'InputIcon', 'InputText', 'Password', 'InputOtp', 'Checkbox', 'ConfirmPopup', 'ConfirmDialog']
        }
    }
})
