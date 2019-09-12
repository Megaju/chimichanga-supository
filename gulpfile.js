const {src, dest, series, watch} = require('gulp');
const del = require('del');
const iLoveSass = require('gulp-sass');

function clean() {
    return del('dist');
}

function watcher() {
    watch('assets/sass/**/*.sass', {ignoreInitial: false}, sass);
}

function sass() {
    return src('assets/sass/**/*.sass', {
        sourcemaps: true
    })
        .pipe(iLoveSass())
        .pipe(dest('dist/css', {
            sourcemaps: '.'
        }))
};

module.exports = {
    default: series(clean, sass),
    watch: series(clean, watcher)
}
