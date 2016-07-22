const { getMetadata } = require('page-metadata-parser');

// TODO: Fails on iOS (regeneratorRuntime not defined).
// We can fix this by requiring babel-polyfill, but we should figure out how to
// make that an iOS-only require since Android is already ES6-compatible.
const pageMetadata = getMetadata(document);
const pageTitle = pageMetadata.title;
