module.exports = {

  dev: {
    files: [{
      expand: true,
      cwd: 'js/babel/',
      src: '*.js',
      dest: 'js/browserify/'
    }]
  },

};