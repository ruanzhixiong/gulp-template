/** 
 * @param author:'阮志雄'，
 * @param fearures：'青春自愿网'
 * @param company:''
 * @param date:'2018-12-19 17:14'
 */

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify"),
    minifyCss = require("gulp-minify-css"),
    minifyHtml = require("gulp-minify-html"),
    imageMin = require('gulp-imagemin'),
    connect = require('gulp-connect'), //服务
    livereload = require('gulp-livereload'),
    rev = require('gulp-rev-append'), //添加版本号
    fileinclude = require('gulp-file-include'), //提取公共部分
    autoprefixer = require('gulp-autoprefixer'); //自动补全css前缀

// 压缩js文件，并重命名
gulp.task('minifyjs', done => {
    gulp.src('src/js/*.js')
        .pipe(uglify()) //压缩 
        .pipe(gulp.dest('dist/js'));
    done()
});

// 压缩css文件
gulp.task('minifycss', done => {
    gulp.src('src/css/*.css') // 要压缩的css文件
        .pipe(connect.reload())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove: true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(minifyCss()) //压缩css
        .pipe(gulp.dest('dist/css'));
    done()
});

// 压缩图片
gulp.task('image', done => {
    gulp.src('src/imgs/*.*')
        .pipe(imageMin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/imgs'))
    done()
})

// 压缩html文件
gulp.task('minifyhtml', done => {
    gulp.src(['src/**/*.html', '!src/template/*.html']) // 要压缩的html文件
        .pipe(rev())
        .pipe(fileinclude({
            prefix: '@@',
        }))
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('dist/'));
    done()
});

// 拷贝静态文件按
gulp.task('copy', done => {
    gulp.src('src/static/**/*')
        .pipe(gulp.dest('dist/static'))
    done()
});

//webserver
gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        port: 8095,
        root:'dist'
    });
});


// 默认任务
gulp.task('default', gulp.series('minifyhtml',  'minifyjs', 'minifycss', 'image', 'copy', 'webserver',done => {
    console.log('hello world');
    done();
}));

/**
 * gulp.series：按照顺序执行
 * gulp.paralle：可以并行计算
 */