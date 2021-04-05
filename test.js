const { resolve } = require('path');
const { existsSync, readFileSync } = require('fs');

const getFilePath = name => resolve(__dirname, 'dist', name);

const scssFile = getFilePath('scss.css');
const postcssFile = getFilePath('postcss.css');

const hasSCSSFile = existsSync(scssFile);
const hasPostCSSFile = existsSync(postcssFile);

if (!hasSCSSFile) {
	console.error('SCSS file does not exist.');
	process.exit(1);
}

if (!hasPostCSSFile) {
	console.error('PostCSS file does not exist.');
	process.exit(1);
}

const scssFileContents = readFileSync(scssFile).toString().trim();
const postcssFileContents = readFileSync(scssFile).toString().trim();

if (scssFileContents !== '') {
	console.error('SCSS file has content.');
	process.exit(1);
}

if (postcssFileContents !== '') {
	console.error('PostCSS file has content.');
	process.exit(1);
}

process.exit(0);
