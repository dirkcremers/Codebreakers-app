// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    firebaseApiKey: "AIzaSyDicuzE05R6cvLDbuQghkO9WvgUSp5xuzU",
    firebaseAuthDomain: "codebreakers-1ea0f.firebaseapp.com",
    firebaseDatabaseURL:
      "https://codebreakers-1ea0f-default-rtdb.europe-west1.firebasedatabase.app",
  },
  app: {
    baseURL: "/codebreakers",
    head: {
      title: "Codebreakers",
    },
  },
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: ["@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: true,
  },
});
