// Re-export all functions from the CommonJS implementation in index.cjs
// This keeps compatibility for any code that requires/imports `./index.js`.
module.exports = require('./index.cjs');
