/* Servidor web gulp para desarrollo 
 */
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
    connect.server({
        port: 8001,
        host: 'localhost'
    });
});
