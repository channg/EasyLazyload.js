var gulp = require('gulp'),
    connect = require('gulp-connect'), livereload = require('gulp-livereload');;
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");




gulp.task('htmlmin', function(){
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/html/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/html'));

})


gulp.task('script', function() {
    // 1\. 找到文件
    gulp.src(['dist/EasyLazyload.js'])
        // 2\. 压缩文件
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
})

gulp.task('testCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function(){
    gulp.src('src/img/**')
        .pipe(gulp.dest('dist/img'))
})

gulp.task('build', ['script','testCssmin','imagemin','htmlmin']);




gulp.task('liveloadtest', function() {
    livereload.listen();
    gulp.watch(['test/**/*.*',"test/*.*"], function(event){
        livereload.changed(event.path);
    });
});

gulp.task('webservertest', function() {
    connect.server({
        root: '',
        port: 8001,
        livereload: true
    });
});


gulp.task('test', ['liveloadtest','webservertest']);