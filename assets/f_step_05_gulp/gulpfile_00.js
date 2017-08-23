// gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

// 기본경로설정 ---------------------------------
var url = {before:'./public/src/', after:'./public/dist/'};
var path = {
	sass:{
		src: url.before + 'scss/**/*.scss',
		dist: url.after + 'css'
	}
};

// sass 설정 ------------------------------------
gulp.task('sass', function(){
	return gulp.src(path.sass.src)
						 .pipe(sass().on('error',sass.logError))
						 .pipe(gulp.dest(path.sass.dist));
});

// 서버생성(browser-sync) ----------------------
gulp.task('sync', function(){
 return sync.init({
		port:9900,
		server:{ baseDir:url.after }
	});
});


// 실시간 감지 ---------------------------------
gulp.task('watch', function(){
 gulp.watch(path.sass.src, ['sass']);
});

// gulp명령어를 입력하면 바로 수행하는 기능 ----
gulp.task('default', ['sync', 'sass', 'watch']);
