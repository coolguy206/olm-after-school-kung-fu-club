module.exports = {

    options: {
        sourceMap: true,
        compress: true,
    },

    dev: {
        expand: true,
        cwd: 'less/',
        src: '*.less',
        dest: 'css/',
        ext: '.css',
    },


};