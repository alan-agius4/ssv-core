const path = require("path");
const fs = require("fs");

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const srcRoot = "src";
const tsdMainFile = "typings/browser.d.ts";


module.exports = {
	output: {
		dist: `./dist`,
		artifact: `./_artifact`,
	},
	src: {
		root: srcRoot,
		tsd: tsdMainFile,
		ts: `./${srcRoot}/${pkg.name}.ts`,
		karmaConfig: `karma.conf.js`
	},
	doc: "./doc",
	packageName: pkg.name
};