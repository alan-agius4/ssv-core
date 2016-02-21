const gulp = require("gulp");
const runSeq = require("run-sequence");
const tsc = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const merge = require("merge2");

const paths = require("../paths");

gulp.task("build", (cb) => {
	return runSeq(
		["compile:ts"],
		cb);
});

gulp.task("rebuild", (cb) => {
	return runSeq(
		"clean:artifact",
		"build",
		cb);
});

// scripts
gulp.task("compile:ts", () => {
	const tsProject = getTscProject();
	const tsResult = gulp.src([paths.src.tsd, paths.src.ts])
		.pipe(plumber())
	//.pipe(changed(paths.output.dist, { extension: ".js" }))
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject));

	return merge([
		tsResult.js
			.pipe(sourcemaps.write("."))
			.pipe(gulp.dest(`${paths.output.artifact}`)),
		tsResult.dts.pipe(gulp.dest(`${paths.output.artifact}`))
				]);
});

function getTscProject() {
	return tsc.createProject("tsconfig.json", {
		typescript: require("typescript"),
		outFile: `${paths.packageName}.js`,
	});
}

// copy-dist
gulp.task("copy-dist", () => {
	return runSeq(["copy-dist:scripts", "copy-dist:dts"]);
});

gulp.task("copy-dist:scripts", () => {
	return gulp.src(`${paths.output.artifact}/**/*.js`)
		.pipe(gulp.dest(`${paths.output.dist}/amd`));
});

gulp.task("copy-dist:dts", () => {
	return gulp.src(`${paths.output.artifact}/*.d.ts`)
		.pipe(gulp.dest(`${paths.output.dist}`));
});