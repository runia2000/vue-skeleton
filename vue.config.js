module.exports = {
  baseUrl: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
};
