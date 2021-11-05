export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Great Vacation Adventures',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/brush-king' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js' }
    ]
  },

  auth: {
    rewriteRedirects: true,
    fullPathRedirect: true,
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/order'
    },
    router: {
      middleware: ['auth']
    },
    strategies: {
      google: {
        scheme: 'oauth2',
        clientId: '353107788542-qccnahstd2fg37fkldlbgkam3uu8loc0.apps.googleusercontent.com',
        codeChallengeMethod: 'S256',
        scope: ['openid', 'profile', 'email'],
        responseType: 'code',
        endpoints: {
          userInfo: 'http://localhost:3000/api/me',
          token: 'http://localhost:3000/api/login?callback=true&provider=google', // post request with code property in exchange for token
          logout: false
        },
        token: {
          property: 'token',
          type: 'Bearer'
        },
        redirectUri: `http://localhost:3000`,
        grantType: 'authorization_code'
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    `~/plugins/currency.js`
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/toast',
    'portal-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
  ],

  image: {
    // Options
  },

  axios: {
    withCredentials: true,
    baseURL: "/api/",
    /* proxy: true */
  },

  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    exposeConfig: false
  },

  serverMiddleware: process.env.NODE_ENV === 'production' ? [] :
    [
      { handler: '~/api/index.js' }
    ],


  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
