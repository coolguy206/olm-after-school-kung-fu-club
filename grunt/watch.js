module.exports = {

  options: {
    livereload: true
  },

  dev: {
    files: ['less/*.less', '*.html', 'js/*.js'],
    tasks: ['less', 'babel', 'browserify', 'uglify'],
  },

};