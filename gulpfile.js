var gulp = require('gulp'),
    less = require('gulp-less');
// var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
//     autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

// 定义 less 任务
gulp.task('less', function() {
    gulp.src('./less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./style'));
});

gulp.task('depends', function() {
    gulp.src(['./bower_components/pagepiling.js/jquery.pagepiling.min.js',
            './bower_components/pagepiling.js/jquery.pagepiling.css'])
        .pipe(gulp.dest('./depends'));
});

gulp.task('watch',function(){
	gulp.watch('less/*.less',['less']);
});

gulp.task('default',['less','depends','watch']);
