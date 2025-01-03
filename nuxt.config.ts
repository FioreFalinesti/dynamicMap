import Aura from "@primevue/themes/aura";
import Material from "@primevue/themes/material";
import Lara from "@primevue/themes/lara";
import Nora from "@primevue/themes/nora";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: false,
  },
  modules: ["@primevue/nuxt-module", "@pinia/nuxt"],
  primevue: {
    /* PrimeVue Configuration */
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  runtimeConfig: {
    // https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  },
  $production: {
    // https://nuxt.com/docs/getting-started/configuration#environment-overrides
  },
  $development: {},
  $env: {
    staging: {},
  },
});
