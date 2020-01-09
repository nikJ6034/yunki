

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    //title: process.env.npm_package_name || '',
    title: "대전 유성구을 국회의원 예비후보 김윤기",
    script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description'
        // , content: process.env.npm_package_description || ''
        , content: '대전 유성구을 국회의원 예비후보 김윤기 입니다.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['~/static/css/global.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    //publicPath: 'test_pro/_nuxt/',
    extend (config, ctx) {
    },
    vendor: ['external_library']
  },
  router: {
    base: '/'
  }
}

const webpack = require('webpack')
module.exports = {
  build: {
      vendor: ['jquery'],
      plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery'
        })
      ]
  }
}