const { getMetadata } = require('page-metadata-parser');

const pageMetadata = getMetadata(document);
const pageTitle = pageMetadata.title;
