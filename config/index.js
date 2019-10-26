// config/index.js
module.exports = {
    // ...
    dev: {
      proxyTable: {
        // proxy all requests starting with /api to jsonplaceholder
        '/api': {
          target: 'http://localhost:5000/company',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }