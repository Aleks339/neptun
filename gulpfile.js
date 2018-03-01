var gulp = require("gulp"),
    gulpWatch = require("gulp-watch"),
    less = require("gulp-less");

gulp.task("less", function () {
    return gulp.src("./less/styles.less")
        .pipe(less())
        .pipe(gulp.dest("./css"));
});

gulp.task("watch", function () {
    gulpWatch(["./less/styles.less"], function () { gulp.start("less") });
});