import axios from 'axios';

export default {
  target:"static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    // middleware: ['metaTitle']
},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/static/css/reset.css',
    '@/static/css/index.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/base-comps',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // api接口默认路径
  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://localhost:3000'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  serverMiddleware: {
    '/api': '~/server'
  },
  generate: {
    // subFolders: false,
    // routes(){
    //   return axios.get("/api/products/allId").then(res => {
    //     return res.data.datas.map(product => {
    //       console.log(product);
    //       return '/products/' + product.id
    //     })
    //   })
    // }
    routes: ['/products/1', '/products/2', '/products/3']
  }
}
