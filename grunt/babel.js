module.exports = {

  options: {
    sourceMap: true,
    presets: ['@babel/preset-env', '@babel/preset-typescript']
  },

  dev: {
    files: [{
      expand: true,
      cwd: 'js/',
      src: '*.js',
      dest: 'js/babel/'
    }]
  },


};