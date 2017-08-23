// gulp

var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync');

// 경로설정
var url = {before:'./public/src/', after:'./public/dist/'};
var path = {
	sass:{
		src:url.before + 'scss/**/*.scss',
		dist:url.after + 'css/'
	}, 
	html:url.after + '**/*.html',
	js:url.after+'js/src/**/*.js'
};
// html ------------------------
gulp.task('html', function(){
	return gulp.src(path.html).pipe(sync.stream());
});
// js --------------------------
gulp.task('js', function(){
	return gulp.src(path.js).pipe(sync.stream());
});
// sass ------------------------
gulp.task('sass', function(){
	return gulp.src(path.sass.src)
						 .pipe(sass().on('error', sass.logError))
						 .pipe(gulp.dest(path.sass.dist))
						 .pipe(sync.stream());
});
// browser-sync ----------------
gulp.task('sync',['html', 'sass', 'js'], function() {
   return sync.init({ server: { baseDir: url.after }  });
});
// watch -----------------------
gulp.task('watch', function(){
	gulp.watch(path.sass.src, ['sass']);
	gulp.watch(path.html, ['html']);
});
// default ---------------------
gulp.task('default',['watch', 'sync']);





