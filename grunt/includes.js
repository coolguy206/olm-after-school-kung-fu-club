module.exports = {

  options: {
    flatten: true
  },

  dev: {

    files: [
      {
        cwd: '/',
        src: ['*.html'],
        dest: 'includes/',
      },
    ],

  },

};
