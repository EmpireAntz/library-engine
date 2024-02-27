// schemas/index.js
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const path = require('path');

// Load all typeDefs files
const typesArray = loadFilesSync(path.join(__dirname, '.'), { extensions: ['js'] });

// Extract the file content strings
const typeDefStrings = typesArray.map(fileContent => {
  if (fileContent && typeof fileContent === 'object' && fileContent.loc && fileContent.loc.source && fileContent.loc.source.body) {
    return fileContent.loc.source.body;
  } else {
    return null;
  }
});

// Filter out any potential null values
const validTypeDefStrings = typeDefStrings.filter(content => content !== null);

// Merge all typeDefs into a single array
const typeDefs = mergeTypeDefs(validTypeDefStrings);

// Import resolvers
const resolvers = require('./resolvers');

module.exports = {
  typeDefs,
  resolvers,
};
